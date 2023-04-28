import React, { useEffect } from "react";
import Prism from "prismjs";
import { Card, Container, Form, Nav } from "react-bootstrap";
import Footer from "../layouts/Footer";
import HeaderMobile from "../layouts/HeaderMobile";
import Select from "react-select";

export default function FormSelects() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  const selectOptions = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ];

  return (
    <React.Fragment>
      <HeaderMobile />
      <div className="main main-docs">
        <Container>
          <label className="main-title-label">Forms</label>
          <h2 className="main-title">Selects</h2>
          <p className="main-title-text">Customize the native selects with custom CSS that changes the element’s initial appearance.</p>

          <hr className="main-separator" />

          <h5 id="section1" className="main-subtitle">Basic Example</h5>
          <p>Custom styles are limited to the select's initial appearance and cannot modify the options due to browser limitations.</p>

          <Card className="card-example">
            <Card.Body>
              <Form.Select aria-label="Default select example">
                <option>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<Form.Select aria-label="Default select example">
  <option>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</Form.Select>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section2" className="main-subtitle">Sizing</h5>
          <p>You may also choose from small and large custom selects to match our similarly sized text inputs.</p>

          <Card className="card-example">
            <Card.Body>
              <Form.Select size="lg">
                <option>Large select</option>
              </Form.Select>
              <br />
              <Form.Select>
                <option>Default select</option>
              </Form.Select>
              <br />
              <Form.Select size="sm">
                <option>Small select</option>
              </Form.Select>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<Form.Select size="lg">
  <option>Large select</option>
</Form.Select>
<br />
<Form.Select>
  <option>Default select</option>
</Form.Select>
<br />
<Form.Select size="sm">
  <option>Small select</option>
</Form.Select>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section3" className="main-subtitle">Disabled</h5>
          <p>Add the disabled boolean attribute on a select to give it a grayed out appearance and remove pointer events.</p>

          <Card className="card-example">
            <Card.Body>
              <Form.Select disabled>
                <option>Disabled select</option>
              </Form.Select>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<Form.Select disabled>
  <option>Disabled select</option>
</Form.Select>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br /><br /><br /><br />

          <h2 className="main-title fw-semibold">React Select</h2>
          <p className="main-title-text">A flexible and beautiful Select Input control for ReactJS with multiselect, autocomplete, async and creatable support.</p>

          <br /><br />

          <h5 id="section4" className="main-subtitle">Basic Usage</h5>
          <p>By default it supports all options and operations that are available in a standard select box.</p>

          <Card className="card-example">
            <Card.Body>
              <Select options={selectOptions} isSearchable={false} />
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<Select options={selectOptions} isSearchable={false} />`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section5" className="main-subtitle">With Search</h5>
          <p>By default it does have a search box displayed but most of the time this template uses select without a search.</p>

          <Card className="card-example">
            <Card.Body>
              <Select options={selectOptions} isSearchable={true} />
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<Select options={selectOptions} isSearchable={true} />`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section6" className="main-subtitle">Disabled</h5>
          <p>React Select will respond to the disabled attribute on select elements. You can also initialize it with <code>{`isDisabled={true}`}</code> to get the same effect.</p>

          <Card className="card-example">
            <Card.Body>
              <Select options={selectOptions} isSearchable={false} isDisabled={true} />
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<Select options={selectOptions} isSearchable={false} isDisabled={true} />`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section7" className="main-subtitle">Multiple Box</h5>
          <p>React Select also supports multi-value select boxes. The select below is declared with the multiple attribute.</p>

          <Card className="card-example">
            <Card.Body>
              <Select options={selectOptions} isSearchable={false} isMulti />
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<Select options={selectOptions} isSearchable={false} isMulti />`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section8" className="main-subtitle">Clearable</h5>
          <p>When <code>isClearable</code> set to true, causes a clear button close icon to appear on the select box when a value is selected. Clicking the clear button will clear the selected value, effectively resetting the select box back to its placeholder value.</p>

          <Card className="card-example">
            <Card.Body>
              <Select options={selectOptions} isSearchable={false} isClearable />
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<Select options={selectOptions} isSearchable={false} isClearable />`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

        </Container>

        <Nav id="navDocs" className="nav-docs">
          <label>Bootstrap</label>
          <Nav.Link href="#section1">Basic Example</Nav.Link>
          <Nav.Link href="#section2">Sizing</Nav.Link>
          <Nav.Link href="#section3">Disabled</Nav.Link>

          <hr />

          <label>React Select</label>
          <Nav.Link href="#section4">Basic Usage</Nav.Link>
          <Nav.Link href="#section5">With Search</Nav.Link>
          <Nav.Link href="#section6">Disabled</Nav.Link>
          <Nav.Link href="#section7">Multiple</Nav.Link>
          <Nav.Link href="#section8">Clearable</Nav.Link>
        </Nav>

      </div>
      <Footer />
    </React.Fragment>
  );
}