"use client";

import { useState } from "react";

import {
  Box,
  Container,
  Stack,
  Text,
  Title,
} from "@mantine/core";

import SearchTabs from "./Searchtabs";

import PasteForm from "./SearchForms/PasteForm";
import UploadForm from "./SearchForms/UploadForm";
import MROSearchForm from "./SearchForms/MROSearchForm";

export default function SearchLanding() {
  const [searchMode, setSearchMode] = useState("paste");

  return (
    <Box
      style={{
        width: "100%",
        minHeight: "430px",
        backgroundImage: "url('/images/hero-home.webp')",
        backgroundRepeat: "repeat-x",
        backgroundPosition: "center",
        backgroundSize: "50% 100%",
      }}
    >
      <Container
        size="lg"
        py={60}
        style={{
          minHeight: 430,
          display: "flex",
          alignItems: "center",
        }}
      >
        <Stack gap={40} w="100%">
          {/* Heading */}
          <Stack gap={4} ta="center">
            <Title order={1} fw={700}>
              Aircraft Parts Search
            </Title>

            <Text c="dimmed" size="lg">
              Search thousands of aircraft parts from our inventory.
            </Text>
          </Stack>

          {/* Search Tabs */}
          <SearchTabs
            value={searchMode}
            onChange={setSearchMode}
          />

          {/* Search Forms */}
          {searchMode === "upload" && <UploadForm />}

          {searchMode === "paste" && <PasteForm />}

          {searchMode === "mro" && <MROSearchForm />}
        </Stack>
      </Container>
    </Box>
  );
}