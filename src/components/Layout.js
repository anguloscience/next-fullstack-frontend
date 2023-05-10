import { Container } from "@mui/material";
import Footer from "./Footer";
import Header from "./Header";
import Link from "next/link";

export default function Layout({ children }) {
   return (
      <>
         <Header title="Mónica Angulo Ph.D.">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/contact">Contact</Link>
         </Header>
         <Container fixed>
            <main>{children}</main>
         </Container>
         <Footer />
      </>
   );
}
