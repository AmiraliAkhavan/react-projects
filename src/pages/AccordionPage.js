import Accordion from "../components/Accordion";

function AccordionPage() {
  const items = [
    {
      id: "1",
      label: "meow?",
      content: "FISRT",
    },
    { id: "2", label: "meow?", content: "SECOND" },
    { id: "3", label: "meow?", content: "THIRD" },
  ];

  return <Accordion items={items} />;
}

export default AccordionPage;
