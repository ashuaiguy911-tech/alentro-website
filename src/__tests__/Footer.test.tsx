import { render, screen } from "@testing-library/react";
import Footer from "@/components/Footer";

jest.mock("next/link", () => {
  const MockLink = ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  );
  MockLink.displayName = "MockLink";
  return MockLink;
});

jest.mock("next/image", () => {
  const MockImage = ({ alt, ...props }: { alt: string; [key: string]: unknown }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img alt={alt} {...(props as React.ImgHTMLAttributes<HTMLImageElement>)} />
  );
  MockImage.displayName = "MockImage";
  return MockImage;
});

jest.mock("framer-motion", () => {
  const React = require("react");
  type Props = { children?: React.ReactNode; [key: string]: unknown };
  const strip = ({ children, initial, animate, exit, variants, transition,
    whileHover, whileTap, whileInView, custom, layout, layoutId,
    onHoverStart, onHoverEnd, ...rest }: Props) =>
    ({ children, ...rest });

  const makeEl = (tag: string) =>
    React.forwardRef((props: Props, ref: React.Ref<unknown>) =>
      React.createElement(tag, { ...strip(props), ref }, props.children));

  return {
    motion: {
      footer: makeEl("footer"),
      div: makeEl("div"),
      a: makeEl("a"),
    },
    useInView: () => true,
    useReducedMotion: () => false,
    AnimatePresence: ({ children }: Props) => children,
  };
});

describe("Footer", () => {
  it("renders the company logo", () => {
    render(<Footer />);
    expect(
      screen.getByAltText("Alentro Global Services")
    ).toBeInTheDocument();
  });

  it("renders the phone number with correct href", () => {
    render(<Footer />);
    const phoneLink = screen.getByRole("link", { name: /\+91-7045400592/i });
    expect(phoneLink).toBeInTheDocument();
    expect(phoneLink).toHaveAttribute("href", "tel:+917045400592");
  });

  it("renders the email link", () => {
    render(<Footer />);
    const emailLink = screen.getByRole("link", {
      name: /jennifersenekar123@gmail\.com/i,
    });
    expect(emailLink).toBeInTheDocument();
    expect(emailLink).toHaveAttribute(
      "href",
      "mailto:jennifersenekar123@gmail.com"
    );
  });

  it("renders Quick Links section", () => {
    render(<Footer />);
    expect(screen.getByText(/Quick Links/i)).toBeInTheDocument();
  });

  it("renders navigation links", () => {
    render(<Footer />);
    expect(screen.getByRole("link", { name: "Home" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "About Us" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Contact" })).toBeInTheDocument();
  });

  it("renders Our Services section", () => {
    render(<Footer />);
    expect(screen.getByText(/Our Services/i)).toBeInTheDocument();
  });

  it("renders social media links", () => {
    render(<Footer />);
    expect(screen.getByRole("link", { name: /linkedin/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /twitter/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /facebook/i })).toBeInTheDocument();
  });

  it("renders Pan-India location info", () => {
    render(<Footer />);
    expect(screen.getByText(/Pan-India Operations/i)).toBeInTheDocument();
  });

  it("renders copyright notice", () => {
    render(<Footer />);
    expect(
      screen.getByText(/Alentro Global Services. All rights reserved./i)
    ).toBeInTheDocument();
  });

  it("home link points to /", () => {
    render(<Footer />);
    expect(screen.getByRole("link", { name: "Home" })).toHaveAttribute("href", "/");
  });
});
