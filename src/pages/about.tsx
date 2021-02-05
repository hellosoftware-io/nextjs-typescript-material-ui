import * as React from "react";
import { Container, Typography, Box } from "@material-ui/core";
import Link from "components/Link";
import Footer from "components/Footer";

export default function AboutPage(): JSX.Element {
  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h1">About Page</Typography>
        <Typography variant="body1" sx={{ py: 4 }}>
          You can delete this file if you'd like
        </Typography>
        <Link href="/" color="secondary">
          Go back home
        </Link>
        <Footer />
      </Box>
    </Container>
  );
}
