import React from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
import Image from 'next/image'; 

interface DropdownItemProps{
    imageUrl:string;
    qualification:string;
    institution:string;
}

const DropDownItem = ({imageUrl, qualification, institution}:DropdownItemProps) => {
  return (
    <Accordion type="single" collapsible className="text-white">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <div className="flex flex-row items-center gap-20">
                <p className="text-xl font-bold">{qualification}</p>
                <p className="text-xl font-bold">{institution}</p>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <Image
                alt="Marksheet"
                src={imageUrl}
                height={1000}
                width={1000}
                style={{
                  height: institution===""?600:300,
                  width: institution===""?500:300,
                }}
                className="rounded-3xl"
              />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
  )
}

export default DropDownItem

