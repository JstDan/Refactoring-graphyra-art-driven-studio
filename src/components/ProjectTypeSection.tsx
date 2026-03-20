import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useState } from "react";
//data
import { contactData } from "../pages/Contact/ContactData";
const ProjectTypeSection = () => {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  return (
    <>
      {/* Project Type */}
      <div>
        <label className="text-sm text-muted-foreground mb-4 block">
          Тип проект
        </label>
        <div className="flex flex-wrap gap-3">
          <ToggleButtonGroup
            value={selectedType}
            exclusive
            onChange={(_, newValue) => setSelectedType(newValue)}
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 1.5,
            }}
          >
            {contactData.projectTypes.map((type) => (
              <ToggleButton
                key={type}
                value={type}
                sx={{
                  px: "1.25rem",
                  py: "0.625rem",
                  border: "1px solid",
                  textTransform: "none",
                  borderColor: "divider",
                  color: "text.primary",
                  "&.Mui-selected": {
                    borderColor: "#C45E2C",
                    color: "#C45E2C",
                    backgroundColor: "rgba(0,0,0,0.04)",
                  },
                }}
              >
                {type}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        </div>
      </div>
    </>
  );
};
export default ProjectTypeSection;
