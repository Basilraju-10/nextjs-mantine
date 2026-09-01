"use client";

import {
  Anchor,
  Button,
  Checkbox,
  Group,
  Modal,
  PasswordInput,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";

interface LoginModalProps {
  opened: boolean;
  onClose: () => void;
}

export default function LoginModal({
  opened,
  onClose,
}: LoginModalProps) {
  return (
    <Modal
      opened={opened}
      onClose={onClose}
      centered
      withCloseButton={true}
      title="Sign In to Continue"
      size="440px"
      radius="md"
      padding="16px"
    >
      <Stack gap="md">
        <Text size="sm" c="dimmed">
          Please sign in to add items to cart or raise RFQ
        </Text>

        <Text size="sm">
          New to GFA?{" "}
          <Anchor
            href="/signup"
            c="green"
            fw={500}
          >
            Sign up
          </Anchor>
        </Text>

        <TextInput
          label="Email ID"
          placeholder="you@mantine.dev"
          required
          size="md"
        />

        <PasswordInput
          label="Password"
          placeholder="Your password"
          required
          size="md"
        />

        <Group justify="space-between" align="center">
          <Checkbox
            label="Remember me"
            size="sm"
          />

          <Anchor
            href="/forgot-password"
            c="green"
            size="sm"
          >
            Forgot password?
          </Anchor>
        </Group>

        <Button
          fullWidth
          color="green"
          size="md"
          mt="md"
        >
          Sign In
        </Button>
      </Stack>
    </Modal>
  );
}