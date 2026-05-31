export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const { topic, lang } = req.body;

  const systemPrompt =
    lang === "ar"
      ? "أنت خبير في إصلاح الأجهزة المنزلية. اكتب مقالاً تقنياً احترافياً باللغة العربية بتنسيق JSON فقط بدون أي نص إضافي أو backticks. الشكل المطلوب: {\"title\":\"...\",\"intro\":\"...\",\"sections\":[{\"heading\":\"...\",\"content\":\"...\"}],\"tips\":[\"...\"],\"conclusion\":\"...\"}"
      : lang === "fr"
      ? "Tu es expert en réparation d'électroménager. Écris un article technique professionnel en français en JSON uniquement, sans texte supplémentaire ni backticks. Format: {\"title\":\"...\",\"intro\":\"...\",\"sections\":[{\"heading\":\"...\",\"content\":\"...\"}],\"tips\":[\"...\"],\"conclusion\":\"...\"}"
      : "You are a home appliance repair expert. Write a professional technical article in English in JSON only, no extra text or backticks. Format: {\"title\":\"...\",\"intro\":\"...\",\"sections\":[{\"heading\":\"...\",\"content\":\"...\"}],\"tips\":[\"...\"],\"conclusion\":\"...\"}";

  try {
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-20250514",
        max_tokens: 1000,
        system: systemPrompt,
        messages: [{ role: "user", content: topic }],
      }),
    });

    const data = await response.json();
    const text = data.content?.map((i) => i.text || "").join("") || "";
    const clean = text.replace(/```json|```/g, "").trim();
    const article = JSON.parse(clean);
    res.status(200).json({ article });
  } catch (e) {
    res.status(500).json({ error: "Failed to generate article" });
  }
}
