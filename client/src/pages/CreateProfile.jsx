import React, { useContext, useState } from "react";
import { Link, Route, Navigate, useNavigate } from "react-router-dom";
import {
  Button,
  Center,
  Checkbox,
  CheckboxGroup,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Radio,
  RadioGroup,
  Stack,
  Text,
  Textarea,
  useToast,
} from "@chakra-ui/react";

import { useAuthContext } from "../hooks/useAuthContext";


const isWebView = false;

const CreateProfile = () => {
  const { user } = useAuthContext();

  const [name, setName] = useState("");
  const [pronouns, setPronouns] = useState("");
  const [university, setUniversity] = useState("");
  const [skill, skillHave] = useState("");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [organizationName, setOrganizationName] = useState("");
  const [organizationDesc, setOrganizationDesc] = useState("");
  const [organizationAddress, setOrganizationAddress] = useState("");
  const [numKids, setNumKids] = useState("");
  const [primaryContact, setPrimaryContact] = useState("");
  const [onsiteInfo, setOnsiteInfo] = useState("");

  const [attemptedSubmit, setAttemptedSubmit] = useState(false);

  const PLACEHOLDER_WEB_EXAMPLE_FULL_NAME = "John Doe";
  const PLACEHOLDER_WEB_EXAMPLE_PRONOUNS = "Pronouns";
  const PLACEHOLDER_WEB_EXAMPLE_UNIVERSITY = "University of Waterloo";
  const PLACEHOLDER_WEB_EXAMPLE_PHONE_NUMBER = "111-222-3333";
  const PLACEHOLDER_WEB_EXAMPLE_EMAIL = "example@domain.com";
  const PLACEHOLDER_WEB_EXAMPLE_ORG_NAME = "Feeding Canadian Kids";
  const PLACEHOLDER_WEB_EXAMPLE_NUM_KIDS = "50";
  const PLACEHOLDER_WEB_EXAMPLE_ADDRESS = "123 Main Street, Anytown";
  const PLACEHOLDER_WEB_EXAMPLE_DESCRIPTION = "Non-Profit Organization in Alberta";

  const PLACEHOLDER_MOBILE_EXAMPLE_FULL_NAME = "Full Name (Jane Doe)";
  const PLACEHOLDER_MOBILE_EXAMPLE_EMAIL = "Email (example@domain.com)";
  const PLACEHOLDER_MOBILE_EXAMPLE_PHONE_NUMBER = "Phone Number (111-222-3333)";
  const PLACEHOLDER_MOBILE_EXAMPLE_ORG_NAME = "Name of organization";
  const PLACEHOLDER_MOBILE_EXAMPLE_ADDRESS = "Address of organization";
  const PLACEHOLDER_MOBILE_EXAMPLE_NUM_KIDS = "Number of kids";
  const PLACEHOLDER_MOBILE_EXAMPLE_DESCRIPTION = "Description of organization";

  const availableSkills = ['Front-end', 'Back-end', 'Middleware', 'Hardware', 'Project Management', 
  'APIs', 'Data Analysis', 'UX', 'Design', 'Pitching'];

  const availableInterests = ['Artificial Intelligence (AI)', 'Virtual Reality (VR)', 'Augmented Reality (AR)', 
  'Machine Learning', 'Data Science', 'Web Development', 'Mobile App Development', 'Blockchain', 
  'Internet of Things (IoT)', 'Cybersecurity', 'Game Development', 'Environmental Sustainability', 'Social Impact', 
  'Healthcare Innovation', 'Smart Cities', 'Robotics', '3D Printing', 'Bioinformatics', 'Space Exploration', 'Ethical Hacking'];


    const getTitleSection = () => {
      return (
        <>
          <Text
            alignSelf={{ base: "center", lg: "unset" }}
            className="title"
          >
            Create Profile
          </Text>
        </>
      );
    };
  
    const getFPUSection = () => {
      return (
        <Flex flexDir="row" gap="24px">
          <FormControl
            isRequired
            isInvalid={attemptedSubmit}
          >
            <FormLabel>
              Full Name
            </FormLabel>
            <Input
              type="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={""}
            />
          </FormControl>
          <FormControl
            isRequired
            isInvalid={attemptedSubmit}
          >
            <FormLabel>
              Pronouns
            </FormLabel>
            <Input
              type="pronouns"
              value={pronouns}
              onChange={(e) => setPronouns(e.target.value)}
              placeholder={""}
            />
          </FormControl>
          <FormControl
            isRequired
            isInvalid={attemptedSubmit}
          >
            <FormLabel>
              University
            </FormLabel>
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
          <FormControl
            isRequired
            isInvalid={attemptedSubmit}
          >
            <FormLabel>
              My Skills
            </FormLabel>
            <CheckboxGroup>
              <Stack gap="25px" spacing={[3, 5]} direction={'row'}>
                {availableSkills.map(skill => (
                  <Checkbox value={skill}>{skill}</Checkbox>
                ))
                }
              </Stack>
            </CheckboxGroup>
          </FormControl>

          <FormControl
            isRequired
            isInvalid={attemptedSubmit}
          >
            <FormLabel>
              Wanted Skills
            </FormLabel>
            <CheckboxGroup>
              <Stack gap="25px" spacing={[3, 5]} direction={'row'}>
                {availableSkills.map(skill => (
                  <Checkbox value={skill}>{skill}</Checkbox>
                ))
                }
              </Stack>
            </CheckboxGroup>
          </FormControl>

          <FormControl
            isRequired
            isInvalid={attemptedSubmit}
          >
            <FormLabel>
              Interests
            </FormLabel>
            <CheckboxGroup>
              <Stack gap="25px" spacing={[3, 5]} direction={'row'}>
                {availableInterests.map(skill => (
                  <Checkbox value={skill}>{skill}</Checkbox>
                ))
                }
              </Stack>
            </CheckboxGroup>
          </FormControl>

        </Flex>
      )
    }

    const getWebOrganizationSection = () => {
      return (
        <>
          <Text variant="desktop-heading">Organization Information</Text>
          <Flex flexDir="row" gap="24px">
            <Flex
              flexDir="column"
              w={role !== "ASP" ? "240px" : "-webkit-fit-content"}
            >
              <FormControl
                isRequired
                isInvalid={attemptedSubmit && organizationName === ""}
              >
                <FormLabel variant="desktop-button-bold">
                  Name of organization
                </FormLabel>
                <Input
                  value={organizationName}
                  placeholder={PLACEHOLDER_WEB_EXAMPLE_ORG_NAME}
                  onChange={(e) => setOrganizationName(e.target.value)}
                />
              </FormControl>
            </Flex>
            {role === "ASP" && (
              <Flex flexDir="column" w="-webkit-fit-content">
                <FormControl
                  isRequired
                  isInvalid={attemptedSubmit && numKids === ""}
                >
                  <FormLabel variant="desktop-button-bold">
                    Number of Kids
                  </FormLabel>
                  <Input
                    value={numKids}
                    placeholder={PLACEHOLDER_WEB_EXAMPLE_NUM_KIDS}
                    onChange={(e) => setNumKids(e.target.value)}
                  />
                </FormControl>
              </Flex>
            )}
            <Flex
              flexDir="column"
              w={role !== "ASP" ? "519px" : "-webkit-fit-content"}
            >
              <FormControl
                isRequired
                isInvalid={attemptedSubmit && organizationAddress === ""}
              >
                <FormLabel variant="desktop-button-bold">
                  Address of organization
                </FormLabel>
                <Input
                  value={organizationAddress}
                  placeholder={PLACEHOLDER_WEB_EXAMPLE_ADDRESS}
                  onChange={(e) => setOrganizationAddress(e.target.value)}
                />
              </FormControl>
            </Flex>
          </Flex>
          <Flex flexDir="row">
            <Flex flexDir="column" w="480px">
              <FormControl
                isRequired
                isInvalid={attemptedSubmit && organizationDesc === ""}
              >
                <FormLabel variant="desktop-button-bold">
                  Description of organization
                </FormLabel>
                <Textarea
                  value={organizationDesc}
                  placeholder={PLACEHOLDER_WEB_EXAMPLE_DESCRIPTION}
                  onChange={(e) => setOrganizationDesc(e.target.value)}
                />
              </FormControl>
            </Flex>
          </Flex>
        </>
      );
    };
  
    const getLocation = () => {
      return (
        <Flex flexDir="row" gap="24px">
          <FormControl
            isRequired
            isInvalid={attemptedSubmit}
          >
            <FormLabel>
              Location
            </FormLabel>
            <Input
              type="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={""}
            />
          </FormControl>
        </Flex>
      )
    };

    const getBioSection = () => {
      return (
        <FormControl
          isRequired
          isInvalid={attemptedSubmit && organizationDesc === ""}
        >
          <FormLabel variant="desktop-button-bold">
            Biography
          </FormLabel>
          <Textarea
            onChange={(e) => setOrganizationDesc(e.target.value)}
          />
        </FormControl>
      )

    };

    const getSubmitSection = () => {
      return (
      <>
        {user && <Link to="/hacker-view">View Dashboard</Link>}
      </>
      )

    };
  
  return (
      <Flex
        color="#e4e4e4"
        alignItems="flex-start"

        flexDir="column"
        w={{ base: "100%", lg: "911px" }}
        p= "40px 10%"
        margin="50px 0"
        gap="10px"
        borderRadius="8px"
        boxShadow={{
          base: "",
          lg:
            "0px 0px 3px rgba(0, 0, 0, 0.1), 0px 4px 20px rgba(0, 0, 0, 0.15)",
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
}

export default CreateProfile;