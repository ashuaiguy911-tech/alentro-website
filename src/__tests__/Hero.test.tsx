import { render, screen } from "@testing-library/react";
import Hero from "@/components/Hero";

jest.mock("next/link", () => {
  const MockLink = ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  );
  MockLink.displayName = "MockLink";
  return MockLink;
});

jest.mock("framer-motion", () => {
  const React = require("react");
  type Props = { children?: React.ReactNode; [key: string]: unknown };
  const strip = ({ children, initial, animate, exit, variants, transition,
    whileHover, whileTap, whileInView, custom, layout, layoutId, style,
    onMouseMove, onMouseLeave, ...rest }: Props) =>
    ({ children, ...rest });

  const makeEl = (tag: string) =>
    React.forwardRef((props: Props, ref: React.Ref<unknown>) =>
      React.createElement(tag, { ...strip(props), ref }, props.children));

  return {
    motion: {
      div: makeEl("div"),
      h1: makeEl("h1"),
      p: makeEl("p"),
      span: makeEl("span"),
      section: makeEl("section"),
    },
    useReducedMotion: () => false,
    useScroll: () => ({
      scrollY: { get: () => 0, onChange: () => () => {} },
      scrollYProgress: { get: () => 0 },
    }),
    useTransform: () => ({ get: () => 0 }),
    useSpring: (v: unknown) => v,
    AnimatePresence: ({ children }: Props) => children,
  };
});

describe("Hero", () => {
  it("renders the main headline", () => {
    render(<Hero />);
    expect(screen.getByText(/Empowering Businesses with/i)).toBeInTheDocument();
  });

  it("renders the subtext tagline", () => {
    render(<Hero />);
    expect(
      screen.getByText(/Reliable\. Scalable\. Secure\./i)
    ).toBeInTheDocument();
  });

  it("renders the Explore Services CTA button", () => {
    render(<Hero />);
    expect(screen.getByRole("link", { name: /Explore Services/i })).toBeInTheDocument();
  });

  it("renders the Get Free Consultation CTA button", () => {
    render(<Hero />);
    expect(screen.getByRole("link", { name: /Get Free Consultation/i })).toBeInTheDocument();
  });

  it("Explore Services links to /services", () => {
    render(<Hero />);
    expect(screen.getByRole("link", { name: /Explore Services/i })).toHaveAttribute(
      "href",
      "/services"
    );
  });

  it("Get Free Consultation links to /contact", () => {
    render(<Hero />);
    expect(screen.getByRole("link", { name: /Get Free Consultation/i })).toHaveAttribute(
      "href",
      "/contact"
    );
  });

  it("renders the trusted IT partner badge", () => {
    render(<Hero />);
    expect(screen.getByText(/Trusted IT Partner Across India/i)).toBeInTheDocument();
  });

  it("has the hero section landmark", () => {
    render(<Hero />);
    expect(screen.getByRole("region", { name: /hero section/i })).toBeInTheDocument();
  });
});
