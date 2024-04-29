import React, { useEffect, useState } from "react";

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
    <div style={{ display: "flex" }}>
      {points &&
        filteredOrganizations.map(([organizationName, organizationData]) => (
          <label key={organizationName} style={{ marginRight: "20px" }}>
            <input
              type="radio"
              name="organization"
              value={organizationName}
              checked={selectedOrganization === organizationName}
              onChange={() => handleOrganizationSelection(organizationName)}
            />
            <span>{organizationName}</span>
            <p>
              This organization is helpful for you because:{" "}
              {filterKeys.map((key) => (
                <p key={key}>{organizationData[key] && `${key} `}</p>
              ))}
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
