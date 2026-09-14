"use client";

import { Box, Button, Container, Paper, Text, Title } from "@mantine/core";

const articles = [
  {
    date: "Aug 15",
    year: "2025",
    title: 'Can you explain the "Exchange Plus Cost" model in detail?',
    description:
      "Exchange Plus Cost means an exchange in which the customer pays the exchange fee at the initial stage and subsequently pays the cost of the repair and overhaul of the off-unit.",
  },
  {
    date: "Jul 10",
    year: "2025",
    title:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet",
    description:
      "Exchange Plus Cost means an exchange in which the customer pays the exchange fee at the initial stage and subsequently pays the cost of the repair and overhaul of the off-unit.",
  },
  {
    date: "Jan 09",
    year: "2025",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    description:
      "Exchange Plus Cost means an exchange in which the customer pays the exchange fee at the initial stage and subsequently pays the cost of the repair and overhaul of the off-unit.",
  },
];

export default function LatestNews() {
  return (
    <Box className="latest-news">
      <Container size="lg">

        {/* Heading */}
        <Box ta="center" mb={50}>
          <Text
            size="sm"
            fw={500}
            c="dimmed"
            mb={8}
            className="latest-news-label"
          >
            LATEST ARTICLES
          </Text>

          <Title order={2} className="latest-news-title">
            <span>Latest</span> News & Events
          </Title>
        </Box>

        {/* Articles List Container */}
        <Paper className="articles-box" shadow="none">
          {articles.map((article, index) => (
            <Box
              key={index}
              className={`article-row ${
                index === articles.length - 1 ? "last-article" : ""
              }`}
            >
              {/* Green Date Badge */}
              <Box className="article-date">
                <Text fw={700} className="article-date-day">
                  {article.date}
                </Text>

                <Text className="article-date-year">
                  {article.year}
                </Text>
              </Box>

              {/* Title & Description */}
              <Box className="article-content">
                <Title order={4} className="article-title">
                  {article.title}
                </Title>

                <Text className="article-description">
                  {article.description}
                </Text>
              </Box>
            </Box>
          ))}
        </Paper>

        {/* Bottom CTA Button */}
        <Box ta="center" mt={48}>
          <Button
            variant="outline"
            radius="xl"
            size="md"
            className="view-articles-btn"
          >
            View all Articles
          </Button>
        </Box>

      </Container>
    </Box>
  );
}