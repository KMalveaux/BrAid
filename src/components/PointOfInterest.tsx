import React, { useEffect, useState } from "react";

import styles from "../css/PointsOfInterest.module.css";

interface OrganizationData {
  [organizationName: string]: {
    substanceAbuse?: boolean;
    mentalHealth?: boolean;
    dentalServices?: boolean;
    Address?: string;
    [key: string]: boolean | string | undefined; // Index signature for arbitrary keys
  };
}

interface PointsOfInterestProps {
  filterKeys: string[];
  onPOISelect: (selectedPOI: string) => void;
}

const PointsOfInterest: React.FC<PointsOfInterestProps> = ({
  filterKeys,
  onPOISelect,
}) => {
  const [points, setPointsOfInterest] = useState<OrganizationData | null>(null);
  const [selectedOrganization, setSelectedOrganization] = useState<
    string | null
  >(null);

  useEffect(() => {
    const fetchPointsOfInterest = async () => {
      try {
        const response = await fetch("/pointsOfInterest.json");
        const data = await response.json();
        setPointsOfInterest(data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchPointsOfInterest();
  }, []);

  // Function to handle organization selection. Also calls callback function.
  const handleOrganizationSelection = (organizationName: string) => {
    onPOISelect(organizationName);
    setSelectedOrganization(organizationName);
  };

  // Filter organizations based on filterKeys
  const filteredOrganizations = points
    ? Object.entries(points).filter(([organizationName, organizationData]) =>
        filterKeys.some((key) => organizationData[key])
      )
    : [];

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {points &&
        filteredOrganizations.map(([organizationName, organizationData]) => (
          <label id={styles.individualComponent} key={organizationName}>
            <input
              type="radio"
              name="organization"
              value={organizationName}
              checked={selectedOrganization === organizationName}
              onChange={() => handleOrganizationSelection(organizationName)}
            />
            <span>
              <h1>{organizationName}</h1>
            </span>
            <p>
              This organization is helpful for you because:
              <ul>
                {filterKeys.map((key) => {
                  if (organizationData[key]) {
                    return <li key={key}>{key}</li>;
                  } else {
                    return null; // Skip rendering if the key doesn't apply
                  }
                })}
              </ul>
            </p>
            {organizationData.Address && (
              <p> Address: {organizationData.Address}</p>
            )}
          </label>
        ))}
    </div>
  );
};

export default PointsOfInterest;
