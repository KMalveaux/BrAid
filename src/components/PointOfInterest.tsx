//Third Party Imports
import { useEffect, useState } from "react";

//Local Imports

interface OrganizationData {
  [organizationName: string]: {
    substanceAbuse?: boolean;
    mentalHealth?: boolean;
    dentalServices?: boolean;
    Address?: string;
  };
}

const PointsOfInterest = () => {
  const [Points, setPointsOfInterest] = useState<OrganizationData | null>();

  useEffect(() => {
    const FetchPointsOfInterest = async () => {
      try {
        const response = await fetch("/pointsOfInterest.json");
        const data = await response.json();
        setPointsOfInterest(data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    FetchPointsOfInterest();
  }, []);

  return (
    <div>
      <p>Hello</p>
    </div>
  );
};
