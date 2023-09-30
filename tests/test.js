// Build by suulcoder
// UI Test

// Initiate selenium with javascript
const {By,Key,Builder} = require("selenium-webdriver");
async function test(){
    //To wait for browser to build and launch properly
    let driver = await new Builder().forBrowser("firefox").build();

    //To fetch 'https://demoqa.com/' from the browser with our code.
    await driver.get('https://demoqa.com/');

    //-------------------------------------------------------------
    //Click Elements
         
    // Find card elements with class name 'card'
    const cards = await driver.findElements(By.className('card'));

    // Check if there are any 'card' elements
    if (cards.length > 0) {
    // Iterate through the card elements

        var counter = 0;
        for (const card of cards) {
            // Check if the card contains an <h5> element with the text 'Elements'
            try{
                const h5Element = await card.findElement(By.xpath(".//h5[text()='Elements']"));
                if (h5Element) {
                    // Click on the card element that contains 'Elements'
                    await driver.executeScript("arguments[0].scrollIntoView(true);", cards[counter]);
                    await cards[counter].click();
                    break;
                }
            } catch{
                // Ignore
            } 
            counter+=1;
        }
    } else {
        console.error('No ClassName="card" found in the DOM.');
    }

    //-------------------------------------------------------------
    //Click CheckBox
         
    // Find card elements with class name 'card'
    const btns = await driver.findElements(By.className('btn'));

    // Check if there are any 'btns' elements
    if (btns.length > 0) {
    // Iterate through the btn elements

        var counter = 0;
        for (const btn of btns) {
            // Check if the btn contains an <span> element with the text 'Check Box'
            
            try {
                const spanElement = await btn.findElement(By.xpath(".//span[text()='Check Box']"));
                if (spanElement) {
                    await driver.executeScript("arguments[0].scrollIntoView(true);", btns[counter]);
                    await btns[counter].click();
                    break;
                }
            } catch{
                // Ignore
            } 
            counter+=1;
        }
    } else {
        console.error('No ClassName="btn" found in the DOM.');
    }

    //-------------------------------------------------------------
    //Click + Button

    const buttonElement = await driver.findElement(By.className('rct-option-expand-all'));

    if (buttonElement) {
      // Scroll the button element into view
      await driver.executeScript("arguments[0].scrollIntoView(true);", buttonElement);
      
      // Click on the button element
      await buttonElement.click();
    } else {
      console.error('Button + element not found.');
    }

    //-------------------------------------------------------------
    //Click tree-node-excelFile

    const buttonExcelFile = await driver.findElement(By.css('label[for="tree-node-excelFile"]'));

    if (buttonExcelFile) {
      // Scroll the button element into view
      await driver.executeScript("arguments[0].scrollIntoView(true);", buttonExcelFile);
      
      // Click on the button element
      await buttonExcelFile.click();
    } else {
      console.error('Button excelFile element not found.');
    }

    //-------------------------------------------------------------
    //Click tree-node-wordFile

    const buttonWordFile = await driver.findElement(By.css('label[for="tree-node-wordFile"]'));

    if (buttonWordFile) {
      // Scroll the button element into view
      await driver.executeScript("arguments[0].scrollIntoView(true);", buttonWordFile);
      
      // Click on the button element
      await buttonWordFile.click();
    } else {
      console.error('Button wordFile element not found.');
    }

    //-------------------------------------------------------------
    //Click Dynamic Properties

    // Check if there are any 'btns' elements
    if (btns.length > 0) {
    // Iterate through the btn elements

        var counter = 0;
        for (const btn of btns) {
            // Check if the btn contains an <span> element with the text 'Dynamic Properties'
            
            try {
                const spanElement = await btn.findElement(By.xpath(".//span[text()='Dynamic Properties']"));
                if (spanElement) {
                    await driver.executeScript("arguments[0].scrollIntoView(true);", btns[counter]);
                    await btns[counter].click();
                    break;
                }
            } catch{
                // Ignore
            } 
            counter+=1;
        }
    } else {
        console.error('No ClassName="btn" found in the DOM.');
    }

    //-------------------------------------------------------------
    // Wait for 5 seconds
    await new Promise(resolve => setTimeout(resolve, 5000));


    //-------------------------------------------------------------
    // Click on ColorChange

    const buttoncolorChange = await driver.findElement(By.id('colorChange'));

    if (buttoncolorChange) {
      // Scroll the button element into view
      await driver.executeScript("arguments[0].scrollIntoView(true);", buttoncolorChange);
      
      // Click on the button element
      await buttoncolorChange.click();
    } else {
      console.error('Button element with ID "colorChange" not found.');
    }

    //-------------------------------------------------------------
    //Click Web Tables

    // Check if there are any 'btns' elements
    if (btns.length > 0) {
        // Iterate through the btn elements
    
        var counter = 0;
        for (const btn of btns) {
            // Check if the btn contains an <span> element with the text 'Web Tables'
            
            try {
                const spanElement = await btn.findElement(By.xpath(".//span[text()='Web Tables']"));
                if (spanElement) {
                    await driver.executeScript("arguments[0].scrollIntoView(true);", btns[counter]);
                    await btns[counter].click();
                    break;
                }
            } catch{
                // Ignore
            } 
            counter+=1;
        }
    } else {
        console.error('No ClassName="btn" found in the DOM.');
    }

    //-------------------------------------------------------------
    // Delete first element on table

    // Find the <span> element with the ID "delete-record-1"
    const spanElement = await driver.findElement(By.id('delete-record-1'));

    if (spanElement) {
      // Scroll the <span> element into view
      await driver.executeScript("arguments[0].scrollIntoView(true);", spanElement);
      
      // Click on the <span> element
      await spanElement.click();
    } else {
      console.error('Span element with ID "delete-record-1" not found.');
    }

    //-------------------------------------------------------------
    // Click on Add

    const buttonAdd = await driver.findElement(By.id('addNewRecordButton'));

    if (buttonAdd) {
      // Scroll the button element into view
      await driver.executeScript("arguments[0].scrollIntoView(true);", buttonAdd);
      
      // Click on the button element
      await buttonAdd.click();
    } else {
      console.error('Button element with ID "colorChange" not found.');
    }

    //-------------------------------------------------------------
    // Fill Form


    try {
        // Fill the form fields with data
        await driver.findElement(By.id('firstName')).sendKeys('Juan');
        await driver.findElement(By.id('lastName')).sendKeys('Perez');
        await driver.findElement(By.id('userEmail')).sendKeys('test@test.bi.com.gt');
        await driver.findElement(By.id('age')).sendKeys('23');
        await driver.findElement(By.id('salary')).sendKeys('8000');
        await driver.findElement(By.id('department')).sendKeys('Guatemala');

      } catch (error) {
        console.error('An error occurred when filling the data:', error);
      }
      
    
    await driver.findElement(By.className('close')).click();


    //-------------------------------------------------------------
    //Click Forms
         
    // Find card elements with class name 'card'
    const collapsed = await driver.findElements(By.className('element-group'));

    // Check if there are any 'card' elements
    if (collapsed.length > 0) {
    // Iterate through the card elements

        var counter = 0;
        for (const card of collapsed) {
            // Check if the card contains an <h5> element with the text 'Elements'
            try{
                const h5Element = await card.findElement(By.xpath(".//div[text()='Forms']"));
                if (h5Element) {
                    // Click on the card element that contains 'Elements'
                    await driver.executeScript("arguments[0].scrollIntoView(true);", collapsed[counter]);
                    await collapsed[counter].click();
                    break;
                }
            } catch{
                if(counter == collapsed.length){
                    console.error('Forms is not in the DOM.');
                }
            } 
            counter+=1;
        }
    } else {
        console.error('No ClassName="element-group" found in the DOM.');
    }


    //-------------------------------------------------------------
    //Click Practice Forms

    // Check if there are any 'btns' elements
    if (btns.length > 0) {
        // Iterate through the btn elements
    
        var counter = 0;
        for (const btn of btns) {
            // Check if the btn contains an <span> element with the text 'Web Tables'
            
            try {
                const spanElement = await btn.findElement(By.xpath(".//span[text()='Practice Form']"));
                if (spanElement) {
                    await driver.executeScript("arguments[0].scrollIntoView(true);", btns[counter]);
                    await btns[counter].click();
                    break;
                }
            } catch{
                // Ignore
            } 
            counter+=1;
        }
    } else {
        console.error('No ClassName="btn" found in the DOM.');
    }

    try {
        // Fill the form fields with data
        await driver.findElement(By.id('firstName')).sendKeys('Saul');
        await driver.findElement(By.id('lastName')).sendKeys('Contreras');
        await driver.findElement(By.id('userEmail')).sendKeys('test@test.bi.com.gt');
        await driver.findElement(By.id('userNumber')).sendKeys('1234567890');
        await driver.findElement(By.id('dateOfBirthInput')).sendKeys('21/03/2000');
        await driver.findElement(By.id('subjectsInput')).sendKeys('Maths');
        await driver.findElement(By.id('uploadPicture')).sendKeys('./archivo_de_prueba.txt');
        await driver.findElement(By.id('currentAddress')).sendKeys('Banco Industrial Zona 4. 7ª. Avenida 5-10, Zona 4 Centro Financiero Torre I');
        await driver.findElement(By.id('react-select-3-input')).sendKeys('NRC');
        await driver.findElement(By.id('react-select-4-input')).sendKeys('Delhi');
        
    
        //Click on a hobbie
        const hobbiesLabel = await driver.findElement(By.css('label[for="hobbies-checkbox-3"]'));

        if (hobbiesLabel) {
            await driver.executeScript("arguments[0].scrollIntoView(true);", buttonWordFile);
            await hobbiesLabel.click();
        } 

        //Click on a genre
        const genreLabel = await driver.findElement(By.css('label[for="gender-radio-1"]'));

        if (genreLabel) {
            await driver.executeScript("arguments[0].scrollIntoView(true);", genreLabel);
            await genreLabel.click();
        } 

        await driver.findElement(By.id('submit')).click();
        await driver.findElement(By.id('closeLargeModal')).click();
    
      } catch (error) {
        console.error('An error occurred when filling the data:', error);
      }

    //-------------------------------------------------------------
    //Click Book Store Application

    // Check if there are any 'card' elements
    if (collapsed.length > 0) {
    // Iterate through the card elements

        var counter = 0;
        for (const card of collapsed) {
            // Check if the card contains an <h5> element with the text 'Elements'
            try{
                const h5Element = await card.findElement(By.xpath(".//div[text()='Book Store Application']"));
                if (h5Element) {
                    // Click on the card element that contains 'Elements'
                    await driver.executeScript("arguments[0].scrollIntoView(true);", collapsed[counter]);
                    await collapsed[counter].click();
                    break;
                }
            } catch{
                if(counter == collapsed.length){
                    console.error('Book Store Application is not in the DOM.');
                }
            } 
            counter+=1;
        }
    } else {
        console.error('No ClassName="element-group" found in the DOM.');
    }

    //-------------------------------------------------------------
    //Click Book Store

    // Check if there are any 'btns' elements
    if (btns.length > 0) {
        // Iterate through the btn elements
    
        var counter = 0;
        for (const btn of btns) {
            // Check if the btn contains an <span> element with the text 'Book Store'
            
            try {
                const spanElement = await btn.findElement(By.xpath(".//span[text()='Book Store']"));
                if (spanElement) {
                    await driver.executeScript("arguments[0].scrollIntoView(true);", btns[counter]);
                    await btns[counter].click();
                    break;
                }
            } catch{
                // Ignore
            } 
            counter+=1;
        }
    } else {
        console.error('No ClassName="btn" found in the DOM.');
    }

    //-------------------------------------------------------------
    // Search


    try {
        // Fill the form fields with data
        await driver.findElement(By.id('searchBox')).sendKeys('Understanding ECMAScript 6');

      } catch (error) {
        console.error('An error occurred searching', error);
      }


    //-------------------------------------------------------------
    // Select book


    try {
        // Locate the <span> element with the class name "mr-2"
        await driver.findElement(By.className('mr-2')).click();
    
      } catch (error) {
        console.error('An error occurred:', error);
      }


    //-------------------------------------------------------------
    // Select Link


    const link = await driver.findElement(By.css('label[id="userName-value"]')); 
    const link_text = await link.getText()
    driver.executeScript("window.open(" + link_text  +", 'new_window')")
      

    //-------------------------------------------------------------
    // Close tab

    driver.close();


    //-------------------------------------------------------------
    // Click Back to store


    try {
        const backButton = await driver.findElement(By.id('addNewRecordButton'))
        await driver.executeScript("arguments[0].scrollIntoView(true);", backButton);
        await backButton.click();
      } catch (error) {
        console.error('An error occurred:', error);
      }

    driver.quit()
}

test()