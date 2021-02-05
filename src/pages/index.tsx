import * as React from "react";
import { Container, Typography, Box } from "@material-ui/core";
import Link from "components/Link";
import Footer from "components/Footer";

export default function HomePage(): JSX.Element {
  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h1">Next.js and Material-UI template</Typography>
        <Typography variant="subtitle1">Written in TypeScript</Typography>
        <Typography variant="body1" sx={{ py: 4 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Typography>
        <Link href="/about" color="secondary">
          Go to the about page
        </Link>
        <Footer />
      </Box>
    </Container>
  );
}
