describe('Visual Regression Testing', () => {
    beforeEach(() => {
        cy.eyesOpen({
            appName: 'Buefy',
            testName: 'Visual Regression Tests',
            apiKey: 'i7KNzc5SWdw5bseLH0o0zGWFbNNvKrZKyMfWYQZli5A110',
            browser: [{
                    name: 'chrome',
                    width: 1200,
                    height: 800
                },
                {
                    name: 'firefox',
                    width: 1200,
                    height: 800
                }
            ]
        });
    });

    afterEach(() => {
        cy.eyesClose();
    });

    it('Documentation should load correct elements on page', () => {
        cy.visit(`http://localhost:8080/documentation`);

        // Let browser load
        cy.wait(1000);
        // Screenshot window
        cy.eyesCheckWindow('Documentation home page');
    });

    it('...documentation/start should load correct elements on page', () => {
        cy.visit(`http://localhost:8080/documentation/start`);

        // Let browser load
        cy.wait(1000);
        // Screenshot window
        cy.eyesCheckWindow('Documentation home page');
    });

    it('...documentation/customization should load correct elements on page', () => {
        cy.visit(`http://localhost:8080/documentation/customization`);

        // Let browser load
        cy.wait(1000);
        // Screenshot window
        cy.eyesCheckWindow('Documentation customization options');
    });

    it('...documentation/constructor-options should load correct elements on page', () => {
        cy.visit(`http://localhost:8080/documentation/constructor-options`);

        // Let browser load
        cy.wait(1000);
        // Screenshot window
        cy.eyesCheckWindow('Documentation constructor options');
    });

    it('...documentation/layout should load correct elements on page', () => {
        cy.visit(`http://localhost:8080/documentation/layout`);

        // Let browser load
        cy.wait(1000);
        // Screenshot window
        cy.eyesCheckWindow('Documentation layout');
    });

    it('...documentation/button should load correct elements and functionalities on page', () => {
        cy.visit(`http://localhost:8080/documentation/button`);

        // Let browser load
        cy.wait(1000);
        // Screenshot window
        cy.eyesCheckWindow('Documentation button');

        // Click "click me" button
        cy.get('div.example-component:first button')
            .click();
        // Screenshot window
        cy.eyesCheckWindow('Expected result after button click');

        // Click invert outlined
        cy.get('.notification.is-primary button')
            .eq(1)
            .click();
        // Screenshot affected elements
        cy.eyesCheckWindow({
            sizeMode: 'selector', //mode
            selector: 'div.example-component:nth-child(2)' //CSS Selector
        });
    });

    it('...documentation/collapse should load correct elements and functionalities on page', () => {
        cy.visit(`http://localhost:8080/documentation/collapse`);

        // Let browser load
        cy.wait(1000);
        // Screenshot window
        cy.eyesCheckWindow('Documentation collapse');

        // Click "click me" button
        cy.get('.button.is-primary')
            .click();
        // Screenshot affected elements
        cy.eyesCheckWindow({
            sizeMode: 'selector', //mode
            selector: '.notification' //CSS Selector
        });

        // Click "toggle" button
        cy.get('.button.is-medium.is-primary')
            .click();
        // Screenshot affected elements
        cy.eyesCheckWindow({
            sizeMode: 'selector', //mode
            selector: 'div.collapse.panel' //CSS Selector
        });
    });

    it('...documentation/dialog should load correct elements on page', () => {
        cy.visit(`http://localhost:8080/documentation/dialog`);

        // Let browser load
        cy.wait(1000);
        // Screenshot window
        cy.eyesCheckWindow('Documentation dialog');

        // Click "launch alert (default)" button
        cy.get('.example-component.button.is-medium:nth-child(1)')
            .click();
        // Screenshot affected elements
        cy.eyesCheckWindow({
            sizeMode: 'selector', //mode
            selector: 'div.modal-card.animation-content' //CSS Selector
        });
        cy.get('.button.is-primary')
            .click();

        // Click "launch alert (custom)" button
        cy.get('.example-component.button.is-medium:nth-child(2)')
            .click();
        // Screenshot affected elements
        cy.eyesCheckWindow({
            sizeMode: 'selector', //mode
            selector: 'div.modal-card.animation-content' //CSS Selector
        });
        cy.get('.button.is-primary')
            .click();

        // Click "launch alert (custom)" 2nd button
        cy.get('button.is-medium.is-danger')
            .click();
        // Screenshot affected elements
        cy.eyesCheckWindow({
            sizeMode: 'selector', //mode
            selector: 'div.modal-card.animation-content' //CSS Selector
        });
        cy.get('.button.is-danger')
            .click();
    });

    it('...documentation/dropdown should load correct elements and functionalities on page', () => {
        cy.visit(`http://localhost:8080/documentation/dropdown`);

        // Let browser load
        cy.wait(1000);
        // Screenshot window
        cy.eyesCheckWindow('Documentation dropdown');

        // Click "click me" button
        cy.get('.dropdown-trigger.button.is-primary')
            .click();
        // Screenshot affected elements
        cy.eyesCheckWindow({
            sizeMode: 'selector', //mode
            selector: '.dropdown-menu.dropdown-content' //CSS Selector
        });

        // Hover over "hover" button
        cy.get('.dropdown-trigger.button.is-info').trigger('mouseover');
        // Screenshot affected elements
        cy.eyesCheckWindow({
            sizeMode: 'selector', //mode
            selector: '.dropdown-menu.dropdown-content' //CSS Selector
        });

        // Click "custom trigger" button
        cy.get('.tag.is-success')
            .click();
        // Screenshot affected elements
        cy.eyesCheckWindow({
            sizeMode: 'selector', //mode
            selector: '.dropdown-menu.dropdown-content'
        });

        // Click "custom trigger" button
        cy.get('button.codeview-showcode')
            .click();
        // Screenshot affected elements
        cy.eyesCheckWindow({
            sizeMode: 'selector', //mode
            selector: '.html.hljs.xml'
        });

        // Click "public" button
        cy.get('.button.is-primary')
            .click();
        // Screenshot affected elements
        cy.eyesCheckWindow({
            sizeMode: 'selector', //mode
            selector: 'div.dropdown-content'
        });

        // Click "selected" button
        cy.get('.dropdown.is-mobile-modal.button.is-primary')
            .click();
        // Screenshot affected elements
        cy.eyesCheckWindow({
            sizeMode: 'selector', //mode
            selector: 'div.dropdown-content'
        });
    });

    it('...documentation/autocomplete should load correct elements on page', () => {
        cy.visit(`http://localhost:8080/documentation/autocomplete`);

        // Let browser load
        cy.wait(1000);
        // Screenshot window
        cy.eyesCheckWindow('Documentation autocomplete');

        // Get element and type into input
        cy.get('.control.has-icons-left.is-clearfix.input.is-rounded').type('j')
            // Screenshot affected elements
        cy.eyesCheckWindow({
            sizeMode: 'selector',
            selector: '.example-section:nth-child(1)'
        });

        // Get element and type into input
        cy.get('input.input:nth-child(1)').type('d')
            // Screenshot affected elements
        cy.eyesCheckWindow({
            sizeMode: 'selector',
            selector: '.example-section:nth-child(2)'
        });

        // Click ".switch input[type=checkbox] + .check"
        cy.get('.switch input[type=checkbox] + .check')
            .click();
        // Click ".switch.is-rounded input[type=checkbox] + .check"
        cy.get('.switch.is-rounded input[type=checkbox] + .check')
            .click();
        // Screenshot affected elements
        cy.eyesCheckWindow({
            sizeMode: 'selector',
            selector: '.example-section:nth-child(2)'
        });

        // Get element and type into input
        cy.get('input.input:nth-child(2)').type('o')
            // Screenshot affected elements
        cy.eyesCheckWindow({
            sizeMode: 'selector',
            selector: '.example-section:nth-child(3)'
        });

        // Get element and type into input
        cy.get('input.input:nth-child(3)').type('o')
            // Screenshot affected elements
        cy.eyesCheckWindow({
            sizeMode: 'selector',
            selector: '.example-section:nth-child(3)'
        });

        // Get element and type into input
        cy.get('input.input:nth-child(4)').type('f')
            // wait for results to load
        cy.wait(500);
        // Screenshot affected elements
        cy.eyesCheckWindow({
            sizeMode: 'selector',
            selector: '.example-section:nth-child(4)'
        });
    });

    it('...documentation/checkbox should load correct elements on page', () => {
        cy.visit(`http://localhost:8080/documentation/checkbox`);

        // Let browser load
        cy.wait(1000);
        // Screenshot window
        cy.eyesCheckWindow('Documentation checkbox');

        // Click third checkbox
        cy.get('.check:nth-child(1)')
            .click();
        // Screenshot affected components
        cy.eyesCheckWindow({
            sizeMode: 'selector',
            selector: '.example-component:nth-child(1)'
        });
    });

    it('...documentation/clockpicker should load correct elements on page', () => {
        cy.visit(`http://localhost:8080/documentation/clockpicker`);

        // Let browser load
        cy.wait(1000);
        // Screenshot window
        cy.eyesCheckWindow('Documentation checkbox');

        // Click time button
        cy.get('span.check:nth-child(1)')
            .click();
        // Enter 12:00 AM
        cy.get('input.input:nth-child(1)').type('1200AM')
            // Screenshot affected components
        cy.eyesCheckWindow({
            sizeMode: 'selector',
            selector: '.example-component:nth-child(1)'
        });

        // Click second time button
        cy.get('span.check:nth-child(2)')
            .click();
        // Enter 12:00 AM
        cy.get('input.input:nth-child(2)').type('1200PM')
            // Screenshot affected components
        cy.eyesCheckWindow({
            sizeMode: 'selector',
            selector: '.example-component:nth-child(2)'
        });

        // Click third time button
        cy.get('span.check:nth-child(3)')
            .click();
        // Screenshot affected components
        cy.eyesCheckWindow({
            sizeMode: 'selector',
            selector: '.example-component:nth-child(3)'
        });

        // Click through each bullet
        cy.get('.control-label:nth-child(1)').click();
        // Screenshot affected components
        cy.eyesCheckWindow({
            sizeMode: 'selector',
            selector: '.column'
        });
        // Click through each bullet
        cy.get('.control-label:nth-child(2)').click();
        // Screenshot affected components
        cy.eyesCheckWindow({
            sizeMode: 'selector',
            selector: '.column'
        });
        // Click through each bullet
        cy.get('.control-label:nth-child(3)').click();
        // Screenshot affected components
        cy.eyesCheckWindow({
            sizeMode: 'selector',
            selector: '.column'
        });
        // Click through each bullet
        cy.get('.control-label:nth-child(4)').click();
        // Screenshot affected components
        cy.eyesCheckWindow({
            sizeMode: 'selector',
            selector: '.column'
        });
        // Click through each bullet
        cy.get('.control-label:nth-child(5)').click();
        // Screenshot affected components
        cy.eyesCheckWindow({
            sizeMode: 'selector',
            selector: '.column'
        });
        // Click through each bullet
        cy.get('.control-label:nth-child(6)').click();
        // Screenshot affected components
        cy.eyesCheckWindow({
            sizeMode: 'selector',
            selector: '.column'
        });
        // Click through each bullet
        cy.get('.control-label:nth-child(7)').click();
        // Screenshot affected components
        cy.eyesCheckWindow({
            sizeMode: 'selector',
            selector: '.column'
        });
        // Click through each bullet
        cy.get('.control-label:nth-child(8)').click();
        // Screenshot affected components
        cy.eyesCheckWindow({
            sizeMode: 'selector',
            selector: '.column'
        });
        // Click through each bullet
        cy.get('.control-label:nth-child(9)').click();
        // Screenshot affected components
        cy.eyesCheckWindow({
            sizeMode: 'selector',
            selector: '.column'
        });
    });

    it('...documentation/datepicker should load correct elements and functionalities on page', () => {
        cy.visit(`http://localhost:8080/documentation/datepicker`);

        // Let browser load
        cy.wait(1000);
        // Screenshot window
        cy.eyesCheckWindow('Documentation datepicker');

        // Click first input button
        cy.get('input.input:nth-child(1)')
            .click();
        // Screenshot affected elements
        cy.eyesCheckWindow({
            sizeMode: 'selector', //mode
            selector: 'dropdown-content:nth-child(1)' //CSS Selector
        });

        // Click second input button
        cy.get('input.input:nth-child(2)')
            .click();
        // Screenshot affected elements
        cy.eyesCheckWindow({
            sizeMode: 'selector', //mode
            selector: 'dropdown-content:nth-child(2)' //CSS Selector
        });

        // Click third input button
        cy.get('input.input:nth-child(3)')
            .click();
        // Screenshot affected elements
        cy.eyesCheckWindow({
            sizeMode: 'selector', //mode
            selector: 'dropdown-content:nth-child(3)' //CSS Selector
        });

        // Click fourth input button
        cy.get('input.input:nth-child(4)')
            .click();
        // Screenshot affected elements
        cy.eyesCheckWindow({
            sizeMode: 'selector', //mode
            selector: 'dropdown-content:nth-child(4)' //CSS Selector
        });
    });

    it('...documentation/field should load correct elements and functionalities on page', () => {
        cy.visit(`http://localhost:8080/documentation/field`);

        // Let browser load
        cy.wait(1000);
        // Screenshot window
        cy.eyesCheckWindow('Documentation field');

        // Click second radio button
        cy.get('span.check:nth-child(2)')
            .click();
        // Screenshot affected elements
        cy.eyesCheckWindow({
            sizeMode: 'selector', //mode
            selector: '.example-component:nth-child(2)' //CSS Selector
        });
    });

    it('...documentation/input should load correct elements and functionalities on page', () => {
        cy.visit(`http://localhost:8080/documentation/input`);

        // Let browser load
        cy.wait(1000);
        // Screenshot window
        cy.eyesCheckWindow('Documentation input');
    });

    it('...documentation/numberinput should load correct elements and functionalities on page', () => {
        cy.visit(`http://localhost:8080/documentation/numberinput`);

        // Let browser load
        cy.wait(1000);
        // Screenshot window
        cy.eyesCheckWindow('Documentation number input');

        // Click third add button
        cy.get('.mdi.mdi-plus.mdi-24px:nth-child(3)')
            // Screenshot 
        cy.eyesCheckWindow({
            sizeMode: 'selector', //mode
            selector: '.example-component:nth-child(1)' //CSS Selector
        });
    });

    it('...documentation/radio should load correct elements and functionalities on page', () => {
        cy.visit(`http://localhost:8080/documentation/radio`);

        // Let browser load
        cy.wait(1000);
        // Screenshot window
        cy.eyesCheckWindow('Documentation radio');
    });

    it('...documentation/select should load correct elements and functionalities on page', () => {
        cy.visit(`http://localhost:8080/documentation/select`);

        // Let browser load
        cy.wait(1000);
        // Screenshot window
        cy.eyesCheckWindow('Documentation select');
    });

    it('...documentation/slider should load correct elements and functionalities on page', () => {
        cy.visit(`http://localhost:8080/documentation/slider`);

        // Let browser load
        cy.wait(1000);
        // Screenshot window
        cy.eyesCheckWindow('Documentation slider');

        // Tick to 8
        cy.get('.b-slider.is-medium.b-slider-tick-label:nth-child(3)').click;
        // Screenshot window 
        cy.eyesCheckWindow({
            sizeMode: 'selector',
            selector: '.example-component(5)'
        });
    });

    it('...documentation/switch should load correct elements and functionalities on page', () => {
        cy.visit(`http://localhost:8080/documentation/switch`);

        // Let browser load
        cy.wait(1000);
        // Screenshot window
        cy.eyesCheckWindow('Documentation switch');
    });

    it('...documentation/taginput should load correct elements and functionalities on page', () => {
        cy.visit(`http://localhost:8080/documentation/taginput`);

        // Let browser load
        cy.wait(1000);
        // Screenshot window
        cy.eyesCheckWindow('Documentation taginput');

        // Click first "x" of sixth example
        cy.get('.example-component:nth-child(6).delete is-small:nth-child(1)')
            .click();
        // Screenshot affected components
        cy.eyesCheckWindow({
            sizeMode: 'selector',
            selector: '.example-component:nth-child(6)'
        });
    });

    it('...documentation/timepicker should load correct elements and functionalities on page', () => {
        cy.visit(`http://localhost:8080/documentation/timepicker`);

        // Let browser load
        cy.wait(1000);
        // Screenshot window
        cy.eyesCheckWindow('Documentation timepicker');
    });

    it('...documentation/upload should load correct elements and functionalities on page', () => {
        cy.visit(`http://localhost:8080/documentation/upload`);

        // Let browser load
        cy.wait(1000);
        // Screenshot window
        cy.eyesCheckWindow('Documentation upload');
    });

    it('...documentation/icon should load correct elements and functionalities on page', () => {
        cy.visit(`http://localhost:8080/documentation/icon`);

        // Let browser load
        cy.wait(1000);
        // Screenshot window
        cy.eyesCheckWindow('Documentation icon');
    });

    it('...documentation/loading should load correct elements and functionalities on page', () => {
        cy.visit(`http://localhost:8080/documentation/loading`);

        // Let browser load
        cy.wait(1000);
        // Screenshot window
        cy.eyesCheckWindow('Documentation icon');

        // Click to launch loading
        cy.get('.button.is-primary.is-medium:nth-child(1)')
            .click();
        // Screenshot loading element
        cy.eyesCheckWindow({
            sizeMode: 'selector',
            selector: 'section:nth-child(1)'
        });
        // Click to launch full page loading
        cy.get('span.check:nth-child(1)')
            .click();
        // Screenshot full page
        cy.eyesCheckWindow('Screenshot full loading');

        // Click twice to stop loading and stop full page loading
        cy.get('span.check:nth-child(2)')
            .click();
        cy.get('span.check:nth-child(2)')
            .click();
        // Click next loading button
        cy.get('.button.is-primary.is-medium:nth-child(2)')
            .click();
        // Screenshot loading element
        cy.eyesCheckWindow({
            sizeMode: 'selector',
            selector: 'section:nth-child(2)'
        });

        // Click next loading button 
        cy.get('.button.is-primary.is-medium:nth-child(3)')
            .click();
        // Screenshot loading element
        cy.eyesCheckWindow({
            sizeMode: 'selector',
            selector: 'section:nth-child(3)'
        });
        // Click to launch full page loading
        cy.get('span.check:nth-child(3)')
            .click();
        // Screenshot full page
        cy.eyesCheckWindow('Screenshot full loading');
    });

    it('...documentation/menu should load correct elements and functionalities on page', () => {
        cy.visit(`http://localhost:8080/documentation/menu`);

        // Let browser load
        cy.wait(1000);
        // Screenshot window
        cy.eyesCheckWindow('Documentation menu');
    });

    it('...documentation/message should load correct elements and functionalities on page', () => {
        cy.visit(`http://localhost:8080/documentation/message`);

        // Let browser load
        cy.wait(1000);
        // Screenshot window
        cy.eyesCheckWindow('Documentation message');
    });

    it('...documentation/modal should load correct elements and functionalities on page', () => {
        cy.visit(`http://localhost:8080/documentation/modal`);

        // Let browser load
        cy.wait(1000);
        // Screenshot window
        cy.eyesCheckWindow('Documentation modal');

        // Click launch image modal
        cy.get('.button.is-primary.is-medium:nth-child(1)')
            .click();
        // Screenshot page
        cy.eyesCheckWindow('Screenshot popup');
        // Close popup
        cy.get('.modal-close.is-large')
            .click();

        // Click launch card modal (keep scroll)
        cy.get('.button.is-primary.is-medium:nth-child(2)')
            .click();
        // Screenshot page
        cy.eyesCheckWindow('Screenshot popup');
        // Close popup
        cy.get('.modal-close.is-large')
            .click();

        // Click launch component modal
        cy.get('.button.is-primary.is-medium:nth-child(3)')
            .click();
        // Screenshot page
        cy.eyesCheckWindow('Screenshot popup');
        // Close popup
        cy.get('.modal-card-foot.button:not(:last-child)')
            .click();

        // Click launch image modal (HTML)
        cy.get('.button.is-primary.is-medium:nth-child(4)')
            .click();
        // Screenshot page
        cy.eyesCheckWindow('Screenshot popup');
        // Close popup
        cy.get('.modal-close.is-large')
            .click();

        // Click launch card modal (Component)
        cy.get('.button.is-primary.is-medium:nth-child(5)')
            .click();
        // Screenshot page
        cy.eyesCheckWindow('Screenshot popup');
        // Close popup
        cy.get('.modal-close.is-large')
            .click();

        // Click launch component modal
        cy.get('.button.is-primary.is-medium:nth-child(6)')
            .click();
        // Screenshot page
        cy.eyesCheckWindow('Screenshot popup');
        // Click remember me
        cy.get('span.check')
            .click();
        // Click close button
        cy.get('button.button')
            .click();
        // Screenshot window
        cy.eyesCheckWindow('Screenshot window');
    });

    it('...documentation/navbar should load correct elements and functionalities on page', () => {
        cy.visit(`http://localhost:8080/documentation/navbar`);

        // Let browser load
        cy.wait(1000);
        // Screenshot window
        cy.eyesCheckWindow('Documentation navbar');
    });

    it('...documentation/notification should load correct elements and functionalities on page', () => {
        cy.visit(`http://localhost:8080/documentation/notification`);

        // Let browser load
        cy.wait(1000);
        // Screenshot window
        cy.eyesCheckWindow('Documentation notification');

        // Click toggle button
        cy.get('button.button.block:nth-child(1)')
            .click();
        // Screenshot affected element
        cy.eyesCheckWindow({
            sizeMode: 'selector',
            selector: '.example-component:nth-child(1)'
        });

        // Click launch notifications
        cy.get('.button.is-medium:nth-child(1)')
            .click();
        // Screenshot window
        cy.eyesCheckWindow('Screenshot popup');
        // Click launch notifications
        cy.get('.button.is-medium:nth-child(2)')
            .click();
        // Screenshot window
        cy.eyesCheckWindow('Screenshot popup');
        // Click launch notifications
        cy.get('.button.is-medium:nth-child(3)')
            .click();
        // Screenshot window
        cy.eyesCheckWindow('Screenshot popup');
    });

    it('...documentation/pagination should load correct elements and functionalities on page', () => {
        cy.visit(`http://localhost:8080/documentation/pagination`);

        // Let browser load
        cy.wait(1000);
        // Screenshot window
        cy.eyesCheckWindow('Documentation pagination');
    });

    it('...documentation/progress should load correct elements and functionalities on page', () => {
        cy.visit(`http://localhost:8080/documentation/progress`);

        // Let browser load
        cy.wait(1000);
        // Screenshot window
        cy.eyesCheckWindow('Documentation progress');

        // Trigger indeterminate button
        cy.get('span.check')
            .click();
        // Select option
        cy.get('select:first').select('is-primary');
        // Screenshot example component
        cy.eyesCheckWindow({
            sizeMode: 'selector',
            selector: '.example-component:fourth'
        });

        // Select option
        cy.get('select:nth-child(1)').select('is-success');
        // Select option
        cy.get('select:nth-child(2)').select('is-small');
        // Screenshot example component
        cy.eyesCheckWindow({
            sizeMode: 'selector',
            selector: '.example-component:nth-child(4)'
        });

        // Select option
        cy.get('select:nth-child(1)').select('is-warning');
        // Select option
        cy.get('select:nth-child(2)').select('is-large');
        // Screenshot example component
        cy.eyesCheckWindow({
            sizeMode: 'selector',
            selector: '.example-component:nth-child(4)'
        });

        // Select option
        cy.get('select:nth-child(1)').select('is-danger');
        // Screenshot example component
        cy.eyesCheckWindow({
            sizeMode: 'selector',
            selector: '.example-component:nth-child(4)'
        });
    });

    it('...documentation/snackbar should load correct elements and functionalities on page', () => {
        cy.visit(`http://localhost:8080/documentation/snackbar`);

        // Let browser load
        cy.wait(1000);
        // Screenshot window
        cy.eyesCheckWindow('Documentation snackbar');
    });

    it('...documentation/steps should load correct elements and functionalities on page', () => {
        cy.visit(`http://localhost:8080/documentation/steps`);

        // Let browser load
        cy.wait(1000);
        // Screenshot window
        cy.eyesCheckWindow('Documentation steps');

        // Click show social
        cy.get('label.switch.is-rounded:nth-child(1)');
        click();
        // Screenshot affected components
        cy.eyesCheckWindow({
            sizeMode: 'selector',
            selector: '.example-component:nth-child(1)'
        });

        // Click clickable marker
        cy.get('label.switch.is-rounded:nth-child(3)');
        click();
        // Click a marker
        cy.get('div.step-marker:nth-child(2)')
            .click();
        // Click success for profile
        cy.get('label.switch.is-rounded:nth-child(5)');
        // Toggle arrow buttons
        cy.get('select:nth-child(1)').select('arrow-left');
        cy.get('select:nth-child(2)').select('arrow-right');
        // Screenshot affected components
        cy.eyesCheckWindow({
            sizeMode: 'selector',
            selector: '.example-component:nth-child(1)'
        });

        // Pagination next page
        cy.get('a.pagination-next:nth-child(1)')
            .click();
        cy.get('a.pagination-next:nth-child(2)')
            .click();
        cy.get('a.pagination-next:nth-child(3)')
            .click();
        cy.get('a.pagination-next:nth-child(4)')
            .click();
        cy.get('a.pagination-next:nth-child(5)')
        click();
        cy.eyesCheckWindow('Take snapshot of window');
    });

    it('...documentation/table should load correct elements and functionalities on page', () => {
        cy.visit(`http://localhost:8080/documentation/table`);

        // Let browser load
        cy.wait(1000);
        // Screenshot window
        cy.eyesCheckWindow('Documentation table');

        // Trigger bordered
        cy.get('span.check:nth-child(1)')
            .click();
        // Trigger striped
        cy.get('span.check:nth-child(2)')
            .click();
        // Trigger narrow
        cy.get('span.check:nth-child(3)')
            .click();
        // Trigger loading state
        cy.get('span.check:nth-child(6)')
            .click();
        // Take a snapshot of affected elements
        cy.eyesCheckWindow({
            sizeMode: 'selector',
            selector: '.example-component:nth-child(1)'
        });

        // Trigger empty table
        cy.get('span.check:nth-child(7)')
            .click();
        // Take a snapshot of affected elements
        cy.eyesCheckWindow({
            sizeMode: 'selector',
            selector: '.example-component:nth-child(1)'
        });

        // Disable simple pagination
        cy.get('span.check:nth-child(10)')
            .click();
        // Sort by descending
        cy.get('select:nth-child(2)').select('desc');
        // Sort by 15 per page
        cy.get('select:nth-child(3)').select('15');
        // Show double pagination
        cy.get('select:nth-child(5)').select('both');
        // Show chevron order
        cy.get('select:nth-child(6)').select('chevron-up');
        // Screenshot changes
        cy.eyesCheckWindow({
            sizeMode: 'selector',
            selector: '.example-component:nth-child(5)'
        });
    });

    it('...documentation/tabs should load correct elements and functionalities on page', () => {
        cy.visit(`http://localhost:8080/documentation/tabs`);

        // Let browser load
        cy.wait(1000);
        // Screenshot window
        cy.eyesCheckWindow('Documentation tabs');

        // Add books item
        cy.get('span.check')
            .click();
        // Click on third .tabs a item
        cy.get('.tabs, a:nth-child(3)')
            .click();
        cy.eyesCheckWindow({
            sizeMode: 'selector',
            selector: '.example-component:nth-child(1)'
        });
    });

    it('...documentation/tag should load correct elements and functionalities on page', () => {
        cy.visit(`http://localhost:8080/documentation/tag`);

        // Let browser load
        cy.wait(1000);
        // Screenshot window
        cy.eyesCheckWindow('Documentation tag');
    });

    it('...documentation/toast should load correct elements and functionalities on page', () => {
        cy.visit(`http://localhost:8080/documentation/toast`);

        // Let browser load
        cy.wait(1000);
        // Screenshot window
        cy.eyesCheckWindow('Documentation toast');

        // Click success button
        cy.get('.button.is-success')
            .click();
        // Let browser load
        cy.wait(1000);
        // Screenshot window
        cy.eyesCheckWindow('Screenshot page');
    });

    it('...documentation/tooltip should load correct elements and functionalities on page', () => {
        cy.visit(`http://localhost:8080/documentation/tooltip`);

        // Let browser load
        cy.wait(1000);
        // Screenshot window
        cy.eyesCheckWindow('Documentation tooltip');

        // Click first dark button
        cy.get('.button.is-dark:nth-child(1)')
            .click();
        // Screenshot affected elements
        cy.eyesCheckWindow({
            sizeMode: 'selector',
            selector: '.example-component:nth-child(1)'
        });

        // Click animated button
        cy.get('button.button:nth-child(7)')
            // Screenshot affected elements
        cy.eyesCheckWindow({
            sizeMode: 'selector',
            selector: '.example-component:nth-child(2)'
        });

        // Click second dark multilined button
        cy.get('.button.is-dark:nth-child(7)')
            .click();
        // Screenshot affected elements
        cy.eyesCheckWindow({
            sizeMode: 'selector',
            selector: '.example-component:nth-child(3)'
        });

        // Click right dark button
        cy.get('.button.is-dark:nth-child(9)')
            .click();
        // Screenshot affected elements
        cy.eyesCheckWindow({
            sizeMode: 'selector',
            selector: '.example-component:nth-child(4)'
        });
    });

});