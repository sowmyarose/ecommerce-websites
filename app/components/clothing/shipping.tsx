const faqShipping = [
  {
    question: "What are your shipping options?",
    answer:
      "We offer Standard (5-7 days), Express (2-3 days), and Overnight (1 day) shipping. Free shipping is available on orders over $50.",
  },
  {
    question: "How can I track my order?",
    answer:
      "Once your order has been shipped, you will receive a tracking number via email. Use this on our Order Tracking Page to check your delivery status.",
  },
  {
    question: "Do you ship internationally?",
    answer:
      "Yes! We ship worldwide. Shipping costs and delivery times vary by location and will be displayed at checkout.",
  },
];

const faqReturn = [
  {
    question: "What is your return policy?",
    answer:
      "We accept returns within 30 days of delivery. Items must be unused, unwashed, and in original packaging with tags attached. Some items, such as final sale products, are non-returnable.",
  },
  {
    question: "How do I start a return?",
    answer:
      "To initiate a return, visit our Returns Portal or contact our support team. You&apos;ll receive a return shipping label and further instructions.",
  },
  {
    question: "Can I exchange an item instead of returning it?",
    answer:
      "Yes! If you need a different size or color, you can request an exchange when starting your return process. Exchanges are subject to stock availability.",
  },
];

export default function Shipping() {
  return (
    <section className="w-full">
      <div className="max-w-4xl mx-auto p-10">
        {/* Shipping */}
        <div className="mt-6">
          <h2 className="text-3xl font-semibold mb-4">Shipping FAQs</h2>
          <hr className="border border-gray-200 mb-8" />
          {faqShipping.map((faq, index) => (
            <div key={index} className="mb-4">
              <h3 className="font-semibold">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>

        {/* Return */}
        <div className="mt-12">
          <h2 className="text-3xl font-semibold mb-4">Return FAQs</h2>
          <hr className="border border-gray-200 mb-8" />
          {faqReturn.map((faq, index) => (
            <div key={index} className="mb-4">
              <h3 className="font-semibold">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
