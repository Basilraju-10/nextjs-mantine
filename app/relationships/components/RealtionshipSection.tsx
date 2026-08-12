"use client";

import {
  Box,
  Container,
  Grid,
  Stack,
  Text,
  Title,
} from "@mantine/core";

export default function RelationshipSection() {
  return (
    <Box bg="white" py={100}>
      <Container size="md">
        <Stack gap={60}>
          {/* Heading */}
          <Box
            pl={20}
            style={{
              borderLeft: "3px solid #00B060",
              maxWidth: 600,
            }}
          >
            <Title
              order={2}
              style={{
                fontSize: 34,
                fontWeight: 400,
                lineHeight: 1.3,
                color: "#475569",
              }}
            >
              Aviation Sales:
              <br />
              Connecting for Life
            </Title>
          </Box>

          {/* Content */}
          <Grid gap={70}>
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Text
                size="sm"
                c="#475569"
                style={{ lineHeight: 2 }}
              >
               Our expertise and ethical values has built strong relationship across the globe starting from Aircraft manufacturers, OEM's, repair shops to simple consumables traders. We have poured tremendous resources into developing a global supply chain of aircraft components and parts from OEMs, MROs, and distributors and other suppliers of factory new, new surplus, overhauled, serviceable and as-removed parts along with a good credit facility which enable us to have access to parts anytime round the globe. We have a strong foundation through enduring relationships with suppliers of all types from around the world, in every material class including avionics, engines, expendables and consumables. These established relationships help us leverage a vast array of assets for acquisition, loan, lease and exchange. If your part isn't under our roof, we'll find and ship it to you anywhere in the world fast.
              </Text>

              <Text
                mt={40}
                size="sm"
                c="#475569"
                style={{ lineHeight: 2 }}
              >
                GFA is an authorized reseller of EDC who offers a large variety of certified FAA PMA lighting and interior components for major fleets including Airbus, Boeing, Cessna, Hawker, Gulfstream & Bombardier.
                <br/>
                <br/>
                GFA has also partnered with Wamco the pioneer and world leader in advanced light sciences, lighting solutions and components in the aerospace domain. GFA is now an authorized lamp distributor of Wamco.
              </Text>
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 6 }}>
              <Text
                size="sm"
                c="#475569"
                style={{ lineHeight: 2 }}
              >
                Strategic partnerships with industry leaders is at the heart of GFA's growth plans and fits well with our mission of delivering world class services. One of our latest additions to this list is Gulfstream - the first civilian aircraft manufacturer to develop an enhanced vision system. The infrared-assisted vision system changed the way pilots fly at night and in obscured-vision situations. The Gulfstream fleet consistently averages a National Business Aviation Association (NBAA) dispatch reliability rating of 99.8 percent. GFA is approved to provide Gulfstream the various categories of parts or services such as distribution of aircraft components per "ASA-100" and FAA advisory circular 00-56B certificate.
              </Text>

              <Text
                mt={40}
                size="sm"
                c="#475569"
                style={{ lineHeight: 2 }}
              >
                We are happy to update you that GFA has tied up with HEICO and does have the following Repair Capabilities coming under our wings at an Affordable cost. In the industry where time waits for none, GFA steps up to provide quick and high-quality repair management for rotables, avionics, life-saving equipment, and parts with limited lifespans. We are authorized to are duly authorized to represent HEICO Aerospace subsidiary companies, collectively referred to as HEICO Repair Group. Feel free to reach out to us for all your repair and overhauling requirements.
              </Text>
            </Grid.Col>
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
}