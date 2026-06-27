import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ContactForm from "@/components/ContactForm";

describe("ContactForm", () => {
  it("renders all form fields", () => {
    render(<ContactForm />);
    expect(screen.getByLabelText(/full name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/company/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/phone/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/service required/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
  });

  it("renders submit button", () => {
    render(<ContactForm />);
    expect(
      screen.getByRole("button", { name: /send message/i })
    ).toBeInTheDocument();
  });

  it("shows validation error for empty full name", async () => {
    render(<ContactForm />);
    fireEvent.click(screen.getByRole("button", { name: /send message/i }));
    await waitFor(() => {
      expect(screen.getByText(/full name is required/i)).toBeInTheDocument();
    });
  });

  it("shows validation error for invalid email", async () => {
    const user = userEvent.setup();
    render(<ContactForm />);
    await user.type(screen.getByLabelText(/full name/i), "Test User");
    await user.type(screen.getByLabelText(/company/i), "Test Co");
    await user.type(screen.getByLabelText(/email/i), "notanemail");
    await user.type(screen.getByLabelText(/phone/i), "9876543210");
    await user.selectOptions(
      screen.getByLabelText(/service required/i),
      "IT Consulting"
    );
    await user.type(
      screen.getByLabelText(/message/i),
      "This is a test message that is long enough."
    );
    fireEvent.click(screen.getByRole("button", { name: /send message/i }));
    await waitFor(() => {
      expect(screen.getByText(/valid email address/i)).toBeInTheDocument();
    });
  });

  it("shows validation error for empty message", async () => {
    render(<ContactForm />);
    fireEvent.click(screen.getByRole("button", { name: /send message/i }));
    await waitFor(() => {
      expect(screen.getByText(/message is required/i)).toBeInTheDocument();
    });
  });

  it("shows all 9 service options in dropdown", () => {
    render(<ContactForm />);
    const select = screen.getByLabelText(/service required/i);
    const options = Array.from((select as HTMLSelectElement).options).map(
      (o) => o.text
    );
    expect(options).toContain("IT Infrastructure Setup");
    expect(options).toContain("Annual Maintenance Contracts (AMC)");
    expect(options).toContain("In-House IT Support");
    expect(options).toContain("Helpdesk Services");
    expect(options).toContain("Network and Server Management");
    expect(options).toContain("Firewall and Cybersecurity Solutions");
    expect(options).toContain("Cloud Services (AWS, Azure, GCP)");
    expect(options).toContain("Staff Augmentation");
    expect(options).toContain("IT Consulting");
  });

  it("shows success message on valid submission", async () => {
    const user = userEvent.setup();
    render(<ContactForm />);
    await user.type(screen.getByLabelText(/full name/i), "Rajesh Sharma");
    await user.type(screen.getByLabelText(/company/i), "Test Corp");
    await user.type(screen.getByLabelText(/email/i), "rajesh@test.com");
    await user.type(screen.getByLabelText(/phone/i), "9876543210");
    await user.selectOptions(
      screen.getByLabelText(/service required/i),
      "IT Consulting"
    );
    await user.type(
      screen.getByLabelText(/message/i),
      "We need IT consulting for our growing business."
    );
    fireEvent.click(screen.getByRole("button", { name: /send message/i }));
    await waitFor(
      () => {
        expect(screen.getByText(/message sent/i)).toBeInTheDocument();
      },
      { timeout: 3000 }
    );
  });

  it("disables submit button while submitting", async () => {
    const user = userEvent.setup();
    render(<ContactForm />);
    await user.type(screen.getByLabelText(/full name/i), "Rajesh Sharma");
    await user.type(screen.getByLabelText(/company/i), "Test Corp");
    await user.type(screen.getByLabelText(/email/i), "rajesh@test.com");
    await user.type(screen.getByLabelText(/phone/i), "9876543210");
    await user.selectOptions(
      screen.getByLabelText(/service required/i),
      "IT Consulting"
    );
    await user.type(
      screen.getByLabelText(/message/i),
      "We need IT consulting for our growing business."
    );
    fireEvent.click(screen.getByRole("button", { name: /send message/i }));
    expect(
      screen.getByRole("button", { name: /sending/i })
    ).toBeDisabled();
  });
});
