describe("Validate Contact Us Page", () => {
    before(() => {
      cy.visit("https://techglobal-training.com/frontend/project-1");
    });
  
    it("Should validate the heading is 'Contact Us'", () => {
      cy.get("h1").should("contain.text", "Contact Us");
    });
  
    it("Should validate the address is '2800 S River Rd Suite 310, Des Plaines, IL 60018'", () => {
      cy.contains("2800 S River Rd Suite 310, Des Plaines, IL 60018").should("exist");
    });
  
    it("Should validate the email is 'info@techglobalschool.com'", () => {
      cy.contains("info@techglobalschool.com").should("exist");
    });
  
    it("Should validate the phone number is '(224) 580-2150'", () => {
      cy.contains("(224) 580-2150").should("exist");
    });
  });




  describe("Validate Full Name Input Box", () => {
    before(() => {
      cy.visit("https://techglobal-training.com/frontend/project-1");
    });
  
    it("Should display the Full name input box", () => {
      cy.get('input[name="fullName"]').should("be.visible");
    });
  
    it("Should validate that the Full name input box is required", () => {
      cy.get('input[name="fullName"]').should("have.attr", "required");
    });
  
    it("Should validate that the label of the Full name input box is 'Full name *'", () => {
      cy.get('label[for="fullName"]').should("have.text", "Full name *");
    });
  
    it("Should validate that the placeholder of the Full name input box is 'Enter your full name'", () => {
      cy.get('input[name="fullName"]').should("have.attr", "placeholder", "Enter your full name");
    });
  });





  describe("Validate Gender Selection Field", () => {
    before(() => {
      cy.visit("https://techglobal-training.com/frontend/project-1");
    });
  
    it("Should validate the label is 'Gender *'", () => {
      cy.get('label[for="gender"]').should("have.text", "Gender *");
    });
  
    it("Should validate that the Gender field is required", () => {
      cy.get('input[name="gender"]').first().should("have.attr", "required");
    });
  
    it("Should validate the options are 'Female', 'Male' and 'Prefer not to disclose'", () => {
      const options = ["Female", "Male", "Prefer not to disclose"];
      options.forEach((option, index) => {
        cy.get(`input[name="gender"]`).eq(index).next('label').should("have.text", option);
      });
    });
  
    it("Should validate the options are clickable and not selected by default", () => {
      cy.get('input[name="gender"]').each((option) => {
        cy.wrap(option).should("not.be.checked").click().should("be.checked");
      });
    });
  
    it("Should click on 'Male' and validate it is selected while others are not selected", () => {
      cy.get('input[name="gender"]').eq(1).check().should("be.checked");
      cy.get('input[name="gender"]').eq(0).should("not.be.checked");
      cy.get('input[name="gender"]').eq(2).should("not.be.checked");
    });
  
    it("Should click on 'Female' and validate it is selected while others are not selected", () => {
      cy.get('input[name="gender"]').eq(0).check().should("be.checked");
      cy.get('input[name="gender"]').eq(1).should("not.be.checked");
      cy.get('input[name="gender"]').eq(2).should("not.be.checked");
    });
  });




  describe("Validate Address Input Box", () => {
    before(() => {
      cy.visit("https://techglobal-training.com/frontend/project-1");
    });
  
    it("Should display the Address input box", () => {
      cy.get('input[name="address"]').should("be.visible");
    });
  
    it("Should validate that the Address input box is not required", () => {
      cy.get('input[name="address"]').should("not.have.attr", "required");
    });
  
    it("Should validate that the label of the Address input box is 'Address'", () => {
      cy.get('label[for="address"]').should("have.text", "Address");
    });
  
    it("Should validate that the placeholder of the Address input box is 'Enter your address'", () => {
      cy.get('input[name="address"]').should("have.attr", "placeholder", "Enter your address");
    });
  });




  describe("Validate Email Input Box", () => {
    before(() => {
      cy.visit("https://techglobal-training.com/frontend/project-1");
    });
  
    it("Should display the Email input box", () => {
      cy.get('input[name="email"]').should("be.visible");
    });
  
    it("Should validate that the Email input box is required", () => {
      cy.get('input[name="email"]').should("have.attr", "required");
    });
  
    it("Should validate that the label of the Email input box is 'Email *'", () => {
      cy.get('label[for="email"]').should("have.text", "Email *");
    });
  
    it("Should validate that the placeholder of the Email input box is 'Enter your email'", () => {
      cy.get('input[name="email"]').should("have.attr", "placeholder", "Enter your email");
    });
  });




  describe("Validate Phone Input Box", () => {
    before(() => {
      cy.visit("https://techglobal-training.com/frontend/project-1");
    });
  
    it("Should display the Phone input box", () => {
      cy.get('input[name="phone"]').should("be.visible");
    });
  
    it("Should validate that the Phone input box is not required", () => {
      cy.get('input[name="phone"]').should("not.have.attr", "required");
    });
  
    it("Should validate that the label of the Phone input box is 'Phone'", () => {
      cy.get('label[for="phone"]').should("have.text", "Phone");
    });
  
    it("Should validate that the placeholder of the Phone input box is 'Enter your phone number'", () => {
      cy.get('input[name="phone"]').should("have.attr", "placeholder", "Enter your phone number");
    });
  });




  describe("Validate Message Text Area", () => {
    before(() => {
      cy.visit("https://techglobal-training.com/frontend/project-1");
    });
  
    it("Should display the Message text area", () => {
      cy.get('textarea[name="message"]').should("be.visible");
    });
  
    it("Should validate that the Message text area is not required", () => {
      cy.get('textarea[name="message"]').should("not.have.attr", "required");
    });
  
    it("Should validate that the label of the Message text area is 'Message'", () => {
      cy.get('label[for="message"]').should("have.text", "Message");
    });
  
    it("Should validate that the placeholder of the Message text area is 'Type your message here…'", () => {
      cy.get('textarea[name="message"]').should("have.attr", "placeholder", "Type your message here…");
    });
  });




  describe("Validate Consent Checkbox", () => {
    before(() => {
      cy.visit("https://techglobal-training.com/frontend/project-1");
    });
  
    it("Should validate the label is 'I give my consent to be contacted.'", () => {
      cy.get('label[for="consent"]').should("have.text", "I give my consent to be contacted.");
    });
  
    it("Should validate that the Consent checkbox is required", () => {
      cy.get('input[name="consent"]').should("have.attr", "required");
    });
  
    it("Should validate that the Consent checkbox is clickable", () => {
      cy.get('input[name="consent"]').should("be.visible").and("not.be.checked");
      cy.get('input[name="consent"]').check().should("be.checked");
      cy.get('input[name="consent"]').uncheck().should("not.be.checked");
    });
  });




  describe("Validate SUBMIT Button", () => {
    before(() => {
      cy.visit("https://techglobal-training.com/frontend/project-1");
    });
  
    it("Should display the SUBMIT button", () => {
      cy.get('button[type="submit"]').should("be.visible");
    });
  
    it("Should validate the SUBMIT button is clickable", () => {
      cy.get('button[type="submit"]').should("be.enabled");
    });
  
    it("Should validate that the button text is 'SUBMIT'", () => {
      cy.get('button[type="submit"]').should("have.text", "SUBMIT");
    });
  });




  describe("Validate Form Submission", () => {
    before(() => {
      cy.visit("https://techglobal-training.com/frontend/project-1");
    });
  
    it("Should submit the form and validate submission message", () => {
      cy.get('input[name="fullName"]').type("John Doe");
      cy.get('input[name="gender"]').eq(1).check();
      cy.get('input[name="address"]').type("123 Elm Street");
      cy.get('input[name="email"]').type("johndoe@example.com");
      cy.get('input[name="phone"]').type("1234567890");
      cy.get('textarea[name="message"]').type("This is a test message.");
      cy.get('input[name="consent"]').check();
      cy.get('button[type="submit"]').click();

      cy.contains("Thanks for submitting!").should("be.visible");
    });
  });