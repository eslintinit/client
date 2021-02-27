import { FAQItem } from 'components/molecules'

export const FAQ = () => {
  return (
    <section className="container px-4 pb-24 md:px-2 w-2/5">
      <h1 className="mb-8 text-md font-medium md:text-md text-right text-gray-500">
        FAQ
      </h1>
      <div className="text-sm">
        <FAQItem>What are my visa options?</FAQItem>
        <FAQItem>What’s it going to be like living abroad?</FAQItem>
        <FAQItem>How do I handle travel / expat insurance?</FAQItem>
        <FAQItem>How do I find long-term accommodation?</FAQItem>
        <FAQItem>
          I’m not a native English speaker, can I still find jobs?
        </FAQItem>
        <FAQItem>
          I’m worried I won’t have enough money to live abroad full-time.
        </FAQItem>
      </div>
    </section>
  )
}
