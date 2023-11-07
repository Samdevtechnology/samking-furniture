"use client";
import { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@/utils/MuiServerComponent";
import Checkbox from "@/components/FormsUI/Checkbox";
import Radio from "@/components/FormsUI/Radio";

const MyAccordion = () => {
  const [open, setOpen] = useState(0);

  const handleOpen = (value: number) => setOpen(value);

  return (
    <div>
      <Accordion open={open === 1}>
        <AccordionHeader onClick={() => handleOpen(1)}>
          <div className="flex just-cont">
            <Radio name="newsletter" value="male" label="Newsletters For Him" />
          </div>
        </AccordionHeader>
        {open === 1 && (
          <AccordionBody>
            <Checkbox label="Daily" name="daily" /> <br />
            <Checkbox label="Weekly" name="weekly" />
          </AccordionBody>
        )}
      </Accordion>
      <Accordion open={open === 2}>
        <AccordionHeader onClick={() => handleOpen(2)}>
          <div className="flex just-cont">
            <Radio
              name="newsletter"
              value="female"
              label="Newsletters For Her"
            />
          </div>
        </AccordionHeader>
        {open === 2 && (
          <AccordionBody>
            <Checkbox label="Daily" name="daily" defaultChecked /> <br />
            <Checkbox label="Weekly" name="weekly" defaultChecked />
          </AccordionBody>
        )}
      </Accordion>
      <Accordion open={open === 3}>
        <AccordionHeader onClick={() => handleOpen(3)}>
          <div className="flex just-cont">
            <Radio
              name="newsletter"
              value="none"
              label="I don't want to receive Newsletters"
            />
          </div>
        </AccordionHeader>
      </Accordion>
    </div>
  );
};

export default MyAccordion;
