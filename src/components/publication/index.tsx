import React from "react";
import PublicationCard from "../publication-card";
import { CardComponent } from "./styles";

const PublicationComponent = () => {
  return (
    <CardComponent>
      <PublicationCard />
      <PublicationCard />
      <PublicationCard />
    </CardComponent>
  );
};

export default PublicationComponent;
