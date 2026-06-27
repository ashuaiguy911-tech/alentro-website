import { render, screen } from "@testing-library/react";
import Services from "@/components/Services";

jest.mock("next/link", () => {
  const MockLink = ({
    children,
    href,
    ...rest
  }: React.AnchorHTMLAttributes<HTMLAnchorElement> & { children: React.ReactNode; href: string }) => (
    <a href={href} {...rest}>{children}</a>
  );
  MockLink.displayName = "MockLink";
  return MockLink;
});

jest.mock("framer-motion", () => {
  const React = require("react");
  type Props = { children?: React.ReactNode; [key: string]: unknown };
  const strip = ({ children, initial, animate, exit, variants, transition,
    whileHover, whileTap, whileInView, custom, layout, layoutId, style,
    onMouseMove, onMouseLeave, drag, dragConstraints, ...rest }: Props) =>
    ({ children, ...rest });

  const makeEl = (tag: string) =>
    React.forwardRef((props: Props, ref: React.Ref<unknown>) =>
      React.createElement(tag, { ...strip(props), ref }, props.children));

  const mockMotionValue = () => ({
    get: () => 0,
    set: () => {},
    onChange: () => () => {},
  });

  return {
    motion: {
      div: makeEl("div"),
      span: makeEl("span"),
    },
    useInView: () => true,
    useReducedMotion: () => false,
    useMotionValue: mockMotionValue,
    useTransform: () => mockMotionValue(),
    useSpring: (v: unknown) => v,
    AnimatePresence: ({ children }: Props) => children,
  };
});

const expectedServices = [
  "IT Infrastructure Setup",
  "Annual Maintenance Contracts (AMC)",
  "In-House IT Support",
  "Helpdesk Services",
  "Network and Server Management",
  "Firewall and Cybersecurity Solutions",
  "Cloud Services (AWS, Azure, GCP)",
  "Staff Augmentation",
  "IT Consulting",
];

describe("Services", () => {
  it("renders the section heading", () => {
    render(<Services />);
    expect(screen.getByText(/Our IT Services/i)).toBeInTheDocument();
  });

  it("renders all 9 service cards", () => {
    render(<Services />);
    expectedServices.forEach((serviceName) => {
      expect(screen.getByText(serviceName)).toBeInTheDocument();
    });
  });

  it("renders 9 Learn More links", () => {
    render(<Services />);
    const learnMoreLinks = screen.getAllByRole("link", { name: /learn more about/i });
    expect(learnMoreLinks).toHaveLength(9);
  });

  it("all Learn More links point to /services", () => {
    render(<Services />);
    const learnMoreLinks = screen.getAllByRole("link", { name: /learn more about/i });
    learnMoreLinks.forEach((link) => {
      expect(link).toHaveAttribute("href", "/services");
    });
  });

  it('renders "What We Do" section label', () => {
    render(<Services />);
    expect(screen.getByText(/What We Do/i)).toBeInTheDocument();
  });

  it("renders IT Infrastructure Setup service description", () => {
    render(<Services />);
    expect(
      screen.getByText(/end-to-end infrastructure design and deployment/i)
    ).toBeInTheDocument();
  });

  it("renders Cloud Services description", () => {
    render(<Services />);
    expect(screen.getByText(/AWS, Microsoft Azure, and Google Cloud/i)).toBeInTheDocument();
  });

  it("renders the section with proper aria-labelledby", () => {
    render(<Services />);
    expect(screen.getByRole("region", { name: /our it services/i })).toBeInTheDocument();
  });
});
