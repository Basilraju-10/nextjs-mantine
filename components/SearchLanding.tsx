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
        minHeight: "100vh",
        backgroundImage:
          "url('/images/hero-home.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <Container size="lg" py={50}>
        <Stack gap={40}>
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

          {/* Forms */}
          {searchMode === "upload" && <UploadForm />}
          {searchMode === "paste" && <PasteForm />}
          {searchMode === "mro" && <MROSearchForm />}
        </Stack>
      </Container>
    </Box>
  );
}