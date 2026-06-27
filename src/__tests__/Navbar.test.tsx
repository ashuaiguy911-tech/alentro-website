import { render, screen, fireEvent } from "@testing-library/react";
import Navbar from "@/components/Navbar";

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
    onHoverStart, onHoverEnd, onMouseMove, onMouseLeave, ...rest }: Props) =>
    ({ children, ...rest });

  return {
    motion: {
      header: React.forwardRef((props: Props, ref: React.Ref<HTMLElement>) =>
        React.createElement("header", { ...strip(props), ref }, props.children)),
      div: React.forwardRef((props: Props, ref: React.Ref<HTMLDivElement>) =>
        React.createElement("div", { ...strip(props), ref }, props.children)),
      nav: React.forwardRef((props: Props, ref: React.Ref<HTMLElement>) =>
        React.createElement("nav", { ...strip(props), ref }, props.children)),
    },
    useReducedMotion: () => false,
    useScroll: () => ({ scrollY: { get: () => 0 }, scrollYProgress: { get: () => 0 } }),
    useTransform: () => 0,
    useSpring: (v: unknown) => v,
    AnimatePresence: ({ children }: Props) => children,
  };
});

describe("Navbar", () => {
  it("renders the logo image", () => {
    render(<Navbar />);
    expect(
      screen.getByAltText("Alentro Global Services")
    ).toBeInTheDocument();
  });

  it("renders desktop navigation links", () => {
    render(<Navbar />);
    expect(screen.getByRole("link", { name: "Home" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Services" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "About" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Contact" })).toBeInTheDocument();
  });

  it("renders Get Quote button", () => {
    render(<Navbar />);
    const quoteLinks = screen.getAllByRole("link", { name: /get quote/i });
    expect(quoteLinks.length).toBeGreaterThan(0);
  });

  it("shows hamburger menu button on mobile", () => {
    render(<Navbar />);
    expect(screen.getByRole("button", { name: /open menu/i })).toBeInTheDocument();
  });

  it("toggles mobile menu on hamburger click", () => {
    render(<Navbar />);
    const hamburger = screen.getByRole("button", { name: /open menu/i });
    expect(screen.queryByRole("menu", { name: /mobile navigation/i })).not.toBeInTheDocument();
    fireEvent.click(hamburger);
    expect(screen.getByRole("menu", { name: /mobile navigation/i })).toBeInTheDocument();
  });

  it("closes mobile menu when close button is clicked", () => {
    render(<Navbar />);
    fireEvent.click(screen.getByRole("button", { name: /open menu/i }));
    const closeBtn = screen.getByRole("button", { name: /close menu/i });
    fireEvent.click(closeBtn);
    expect(screen.queryByRole("menu", { name: /mobile navigation/i })).not.toBeInTheDocument();
  });

  it("home link points to /", () => {
    render(<Navbar />);
    const homeLink = screen.getByRole("link", { name: "Home" });
    expect(homeLink).toHaveAttribute("href", "/");
  });

  it("services link points to /services", () => {
    render(<Navbar />);
    expect(screen.getByRole("link", { name: "Services" })).toHaveAttribute("href", "/services");
  });
});
