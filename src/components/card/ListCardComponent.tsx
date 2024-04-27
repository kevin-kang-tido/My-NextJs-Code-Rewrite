import React from "react";
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";

export default function CardProducts() {
  return (
      <Card className="row m-3">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <p className="text-tiny uppercase font-bold">Daily Mix</p>
          <small className="text-default-500">12 Tracks</small>
          <h4 className="font-bold text-large">Frontend Radio</h4>
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          <Image
            alt="Card background"
            className="object-cover rounded-xl h-[200px]"
            src="https://i.pinimg.com/736x/b3/cf/6b/b3cf6b69839e8b2b55cbf3d6024b89a4.jpg"
            width={270}
          />
        </CardBody>
      </Card>
  );
}
