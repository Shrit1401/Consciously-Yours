import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import React from "react";

const AboutTable = () => {
  const data = [
    {
      name: "100% Natural",
      sentence:
        "Our jute bags are made from 100% natural fibers, ensuring eco-friendliness and biodegradability.",
    },
    {
      name: "Sustainability Focus",
      sentence:
        "We're committed to eco-friendly practices, using sustainable materials and production methods to minimize our environmental impact.",
    },
    {
      name: "Quality Craftsmanship",
      sentence:
        "Our jute bags are meticulously handcrafted by skilled artisans, ensuring durability and attention to detail.",
    },
    {
      name: "Customization Options",
      sentence:
        "We provide customization options for bulk orders, allowing businesses to tailor jute bags to their specific needs and branding requirements.",
    },
    {
      name: "Global Market Presence",
      sentence:
        "Our B2B has a strong presence in the global market, with satisfied patrons and wholesale partnerships in numerous countries.",
    },
    {
      name: "Global Accessibility",
      sentence:
        "With worldwide shipping options, our jute bags are accessible to businesses around the globe, spreading sustainable style worldwide.",
    },
    {
      name: "Timely Deliverables",
      sentence:
        "We pride ourselves on timely delivery, ensuring that orders are fulfilled promptly and efficiently to meet client expectations.",
    },
    {
      name: "Export Opportunities",
      sentence:
        "We offer export opportunities, enabling businesses to access our high-quality jute bags and expand their product offerings.",
    },
  ];

  return (
    <Table className="border 1px solid bg-[##759260] font-[600] text-lg border-black border-opacity-35 rounded-full">
      <TableBody>
        {data.map((item, index) => (
          <TableRow key={index}>
            <TableCell className="font-bold">{item.name}</TableCell>
            <TableCell>{item.sentence}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default AboutTable;
