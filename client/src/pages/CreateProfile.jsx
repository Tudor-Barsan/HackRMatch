import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Checkbox,
  CheckboxGroup,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";

import { useAuthContext } from "../hooks/useAuthContext";

const CreateProfile = () => {
  const { user } = useAuthContext();

  const [name, setName] = useState("");
  const [pronouns, setPronouns] = useState("");
  const [university, setUniversity] = useState("");
  const [location, setLocation] = useState("");
  const [biography, setBiography] = useState("");
  const [skill, skillHave] = useState("");

  const [attemptedSubmit, setAttemptedSubmit] = useState(false);

  const availableSkills = [
    "Front-end",
    "Back-end",
    "Middleware",
    "Hardware",
    "Project Management",
    "APIs",
    "Data Analysis",
    "UX",
    "Design",
    "Pitching",
  ];

  const availableInterests = [
    "Artificial Intelligence (AI)",
    "Virtual Reality (VR)",
    "Augmented Reality (AR)",
    "Machine Learning",
    "Data Science",
    "Web Development",
    "Mobile App Development",
    "Blockchain",
    "Internet of Things (IoT)",
    "Cybersecurity",
    "Game Development",
    "Environmental Sustainability",
    "Social Impact",
    "Healthcare Innovation",
    "Smart Cities",
    "Robotics",
    "3D Printing",
    "Bioinformatics",
    "Space Exploration",
    "Ethical Hacking",
  ];

  const getTitleSection = () => {
    return (
      <>
        <Text alignSelf={{ base: "center", lg: "unset" }} className="title">
          Create Profile
        </Text>
      </>
    );
  };

  const getFPUSection = () => {
    return (
      <Flex flexDir="row" gap="24px">
        <FormControl isRequired isInvalid={attemptedSubmit}>
          <FormLabel>Full Name</FormLabel>
          <Input
            type="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={""}
          />
        </FormControl>
        <FormControl isRequired isInvalid={attemptedSubmit}>
          <FormLabel>Pronouns</FormLabel>
          <Input
            type="pronouns"
            value={pronouns}
            onChange={(e) => setPronouns(e.target.value)}
            placeholder={""}
          />
        </FormControl>
        <FormControl isRequired isInvalid={attemptedSubmit}>
          <FormLabel>University</FormLabel>
          <Input
            type="university"
            value={university}
            onChange={(e) => setUniversity(e.target.value)}
            placeholder={""}
          />
        </FormControl>
      </Flex>
    );
  };

  const getSkillsSection = () => {
    return (
      <Flex flexDir="column" gap="24px">
        <FormControl isRequired isInvalid={attemptedSubmit}>
          <FormLabel>My Skills</FormLabel>
          <CheckboxGroup>
            <Stack gap="25px" spacing={[3, 5]} direction={"row"}>
              {availableSkills.map((skill) => (
                <Checkbox value={skill}>{skill}</Checkbox>
              ))}
            </Stack>
          </CheckboxGroup>
        </FormControl>

        <FormControl isRequired isInvalid={attemptedSubmit}>
          <FormLabel>Wanted Skills</FormLabel>
          <CheckboxGroup>
            <Stack gap="25px" spacing={[3, 5]} direction={"row"}>
              {availableSkills.map((skill) => (
                <Checkbox value={skill}>{skill}</Checkbox>
              ))}
            </Stack>
          </CheckboxGroup>
        </FormControl>

        <FormControl isRequired isInvalid={attemptedSubmit}>
          <FormLabel>Interests</FormLabel>
          <CheckboxGroup>
            <Stack gap="25px" spacing={[3, 5]} direction={"row"}>
              {availableInterests.map((skill) => (
                <Checkbox value={skill}>{skill}</Checkbox>
              ))}
            </Stack>
          </CheckboxGroup>
        </FormControl>
      </Flex>
    );
  };

  const getLocation = () => {
    return (
      <Flex flexDir="row" gap="24px">
        <FormControl isRequired isInvalid={attemptedSubmit}>
          <FormLabel>Location</FormLabel>
          <Input
            type="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder={""}
          />
        </FormControl>
      </Flex>
    );
  };

  const getBioSection = () => {
    return (
      <FormControl
        isRequired
        isInvalid={attemptedSubmit && organizationDesc === ""}
      >
        <FormLabel variant="desktop-button-bold">Biography</FormLabel>
        <Textarea
          value={biography}
          onChange={(e) => setBiography(e.target.value)}
        />
      </FormControl>
    );
  };

  const getSubmitSection = () => {
    return <>{user && <Link to="/hacker-view">View Dashboard</Link>}</>;
  };

  return (
    <Flex
      color="#e4e4e4"
      alignItems="flex-start"
      flexDir="column"
      w={{ base: "100%", lg: "911px" }}
      p="40px 10%"
      margin="50px 0"
      gap="10px"
      borderRadius="8px"
      boxShadow={{
        base: "",
        lg: "0px 0px 3px rgba(0, 0, 0, 0.1), 0px 4px 20px rgba(0, 0, 0, 0.15)",
      }}
    >
      {getTitleSection()}
      {getFPUSection()}
      <Divider />
      <Divider />
      {getSkillsSection()}
      <Divider />
      {getLocation()}
      <Divider />
      {getBioSection()}
      <Divider />
      {getSubmitSection()}
    </Flex>
  );
};

export default CreateProfile;
