"use client";

import { useState } from "react";
import {
  ActionIcon,
  Anchor,
  Box,
  Container,
  Divider,
  Flex,
  Group,
  Image,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
} from "@tabler/icons-react";

const locations = {
  USA: {
    address: "Emerald Plaza 402 West Broadway Suite #400, San Diego, CA 92101",
    tel: "+1 858 309 5463",
    email: "info@gfa.aero",
  },
  Jordan: {
    address: "Alsalameh building #22, 2nd Floor, Office #4, Yajouz street, Aljubaiha Amman, Jordan",
    tel: "+962 6 535 9857",
    email: "partners@gfa.aero",
  },
  India: {
    address: "Building No 12, Tech Park Road, Sector 5, Bengaluru, Karnataka, India",
    tel: "+91 80 4123 4567",
    email: "india@gfa.aero",
  },
  UAE: {
    address: "DAFZA Building 4W, Office 301, Dubai Airport Free Zone, Dubai, UAE",
    tel: "+971 4 299 8877",
    email: "uae@gfa.aero",
  },
};

type Country = keyof typeof locations;

const siteMapLinks = [
  "Home", "About Us", "Parts", "Services", "Relationships", 
  "Inventory", "Quality", "News", "Contact Us", "FAQ"
];

export default function Footer() {
  const [activeTab, setActiveTab] = useState<Country>("Jordan");
  const currentLoc = locations[activeTab];

  return (
    <Box bg="#006B2E" c="white" py={60}>
      <Container size="lg">
        <Flex justify="space-between" align="flex-start" wrap="wrap" gap={30}>
          
          {/* Brand & Socials */}
          <Box w={{ base: "100%", sm: 200 }}>
            <Image src="/images/gfa-logo-footer.svg" alt="GFA logo" w={150} mb={30} />
            <Group gap={10}>
              {[IconBrandFacebook, IconBrandLinkedin, IconBrandInstagram].map((Icon, i) => (
                <ActionIcon key={i} radius="xl" size={36} bg="#087F3B" c="white">
                  <Icon size={18} />
                </ActionIcon>
              ))}
            </Group>
          </Box>

          {/* Site Map */}
          <Stack gap={8}>
            <Title order={4} size={18} c="white" mb={4}>Site Map</Title>
            {siteMapLinks.map((item) => (
              <Anchor key={item} href="#" underline="never" size="sm" c="rgba(255,255,255,0.85)">
                {item}
              </Anchor>
            ))}
          </Stack>

          {/* AOG Desk */}
          <Box maw={300}>
            <Title order={4} size={18} c="white" mb={6}>24/7 AOG Desk:</Title>
            <Text size="sm" mb={16} fw={500}>+971507654471 &nbsp;|&nbsp; aog@gfa.aero</Text>
            <Text size="sm" c="rgba(255,255,255,0.85)" lh={1.6}>
              Our AOG line is dedicated to serve our clientele around the globe 24×7 way throughout the year. The AOG Professionals update the inventory time to time so that our clients get the accurate access as per their requirements.
            </Text>
          </Box>

          {/* Locations & Contact */}
          <Box maw={320} w={{ base: "100%", md: 320 }}>
            <Group gap={16} mb={8}>
              {(Object.keys(locations) as Country[]).map((country) => (
                <Text
                  key={country}
                  size="sm"
                  fw={activeTab === country ? 700 : 400}
                  c={activeTab === country ? "white" : "rgba(255,255,255,0.7)"}
                  style={{
                    cursor: "pointer",
                    borderBottom: activeTab === country ? "2px solid white" : "2px solid transparent",
                    paddingBottom: 4,
                  }}
                  onClick={() => setActiveTab(country)}
                >
                  {country}
                </Text>
              ))}
            </Group>

            <Divider color="rgba(255,255,255,0.2)" mb={16} />

            <Text size="sm" c="rgba(255,255,255,0.85)" lh={1.6}>
              {currentLoc.address}
            </Text>

            <Title order={4} size={18} c="white" mt={24} mb={8}>Connect us</Title>
            <Text size="sm" c="rgba(255,255,255,0.85)">Tel: {currentLoc.tel}</Text>
            <Text size="sm" c="rgba(255,255,255,0.85)">E-mail: {currentLoc.email}</Text>
          </Box>
        </Flex>

        <Divider color="rgba(255,255,255,0.2)" my={40} />

        {/* Bottom Bar */}
        <Flex justify="space-between" align="center" wrap="wrap" gap={15}>
          <Text size="sm" c="rgba(255,255,255,0.85)">
            Copyright 2026 © GFA. All rights are reserved
          </Text>

          <Group gap={8}>
            <Anchor href="#" underline="never" size="sm" c="rgba(255,255,255,0.85)">Privacy Policy</Anchor>
            <Text size="sm" c="rgba(255,255,255,0.4)">|</Text>
            <Anchor href="#" underline="never" size="sm" c="rgba(255,255,255,0.85)">Return & Cancellation Policy</Anchor>
            <Text size="sm" c="rgba(255,255,255,0.4)">|</Text>
            <Anchor href="#" underline="never" size="sm" c="rgba(255,255,255,0.85)">Terms & Conditions</Anchor>
          </Group>
        </Flex>
      </Container>
    </Box>
  );
}