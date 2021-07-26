context("Test Contact page with correct data", () => {

  it('Visit the Contact page with path "/us/contact"', () => {
    cy.visit("/us/contact").wait(500);
    cy.location().should((location) => {
      expect(location.pathname).to.eq("/us/contact");
    });
  });

  it("Call the form and fill with right values", () => {
    cy.fixture("/contact/right.json").each((right) => {
      const { firstName, lastName, email, comment } = right;

      cy.get("[data-cy=first_name]")
        .clear()
        .type(firstName)
        .should("have.css", "border-color", "rgb(0, 0, 0)"); // focus the form

      cy.get("[data-cy=last_name]")
        .clear()
        .type(lastName)
        .should("have.css", "border-color", "rgb(0, 0, 0)");

      cy.get("[data-cy=email]")
        .clear()
        .type(email)
        .should("have.css", "border-color", "rgb(0, 0, 0)");

      cy.get("[data-cy=comment]")
        .clear()
        .type(comment)
        .should("have.css", "border-color", "rgb(0, 0, 0)");
    });
  });

  it("Submit the form with correct values", () => {
    cy.get('Button[type="submit"]').contains("Send").wait(2500)
    // cy.get("[data-cy=thankfulness]").contains("Thank you 🤣 Gracias");
    cy.request({
      url: `https://breathecode-cypress.herokuapp.com/v1/marketing/lead`,
      method: 'POST',
      body: {
        automations: "soft",
        browser_lang: null,
        city: "Miami",
        client_comments: "Im Rowan Dash",
        country: "USA",
        email: "rodash@outlook.com",
        first_name: "Rowan",
        language: "us",
        last_name: "Dash",
        latitude: null,
        location: "downtown-miami",
        longitude: null,
        tags: "contact-us",
        utm_language: "us",
        utm_url: "http://localhost:8080/us/contact",
      }
    });
  });
});
