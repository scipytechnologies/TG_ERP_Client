import React, { useEffect } from "react";
import Prism from "prismjs";
import { Card, Container, Nav, Table } from "react-bootstrap";
import Footer from "../layouts/Footer";
import HeaderMobile from "../layouts/HeaderMobile";
import { Grid } from "gridjs-react";

export default function Tables() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <React.Fragment>
      <HeaderMobile />
      <div className="main main-docs">
        <Container>
          <label className="main-title-label">Components</label>
          <h2 className="main-title">Tables</h2>
          <p className="main-title-text">Documentation and examples for opt-in styling of tables (given their prevalent use in JavaScript plugins) with Bootstrap.</p>

          <hr className="main-separator" />

          <h5 id="section1" className="main-subtitle">Basic Example</h5>
          <p>Using the most basic table markup, here’s how .table based tables look in Bootstrap. All table styles are inherited in Bootstrap 5, meaning any nested tables will be styled in the same manner as the parent.</p>

          <Card className="card-example">
            <Card.Body>
              <Table className="mb-0">
                <thead>
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Job Title</th>
                    <th scope="col">Degree</th>
                    <th scope="col">Salary</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Adrian Monino</td>
                    <td>Front-End Engineer</td>
                    <td>Computer Science</td>
                    <td>$120,000</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Socrates Itumay</td>
                    <td>Software Engineer</td>
                    <td>Computer Engineering</td>
                    <td>$150,000</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Reynante Labares</td>
                    <td>Product Manager</td>
                    <td>Business Management</td>
                    <td>$250,000</td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<Table className="mb-0">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Job Title</th>
      <th scope="col">Degree</th>
      <th scope="col">Salary</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Adrian Monino</td>
      <td>Front-End Engineer</td>
      <td>Computer Science</td>
      <td>$120,000</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Socrates Itumay</td>
      <td>Software Engineer</td>
      <td>Computer Engineering</td>
      <td>$150,000</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Reynante Labares</td>
      <td>Product Manager</td>
      <td>Business Management</td>
      <td>$250,000</td>
    </tr>
  </tbody>
</Table>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section2" className="main-subtitle">Striped Rows</h5>
          <p>Use <code>striped</code> props to add zebra-striping to any table row within the tbody.</p>

          <Card className="card-example">
            <Card.Body>
              <Table striped className="mb-0">
                <thead>
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Job Title</th>
                    <th scope="col">Degree</th>
                    <th scope="col">Salary</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Adrian Monino</td>
                    <td>Front-End Engineer</td>
                    <td>Computer Science</td>
                    <td>$120,000</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Socrates Itumay</td>
                    <td>Software Engineer</td>
                    <td>Computer Engineering</td>
                    <td>$150,000</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Reynante Labares</td>
                    <td>Product Manager</td>
                    <td>Business Management</td>
                    <td>$250,000</td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<Table striped className="mb-0">...</Table`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section3" className="main-subtitle">Hoverable Rows</h5>
          <p>Add <code>hover</code> props to enable a hover state on table rows within a tbody.</p>

          <Card className="card-example">
            <Card.Body>
              <Table hover className="mb-0">
                <thead>
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Job Title</th>
                    <th scope="col">Degree</th>
                    <th scope="col">Salary</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Adrian Monino</td>
                    <td>Front-End Engineer</td>
                    <td>Computer Science</td>
                    <td>$120,000</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Socrates Itumay</td>
                    <td>Software Engineer</td>
                    <td>Computer Engineering</td>
                    <td>$150,000</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Reynante Labares</td>
                    <td>Product Manager</td>
                    <td>Business Management</td>
                    <td>$250,000</td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<Table hover className="mb-0">...</Table`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section4" className="main-subtitle">Active Rows</h5>
          <p>Highlight a table row or cell by adding a <code>.table-active</code> class.</p>

          <Card className="card-example">
            <Card.Body>
              <Table className="mb-0">
                <thead>
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Job Title</th>
                    <th scope="col">Degree</th>
                    <th scope="col">Salary</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Adrian Monino</td>
                    <td>Front-End Engineer</td>
                    <td>Computer Science</td>
                    <td>$120,000</td>
                  </tr>
                  <tr className="table-active">
                    <th scope="row">2</th>
                    <td>Socrates Itumay</td>
                    <td>Software Engineer</td>
                    <td>Computer Engineering</td>
                    <td>$150,000</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Reynante Labares</td>
                    <td>Product Manager</td>
                    <td>Business Management</td>
                    <td>$250,000</td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<tr className="table-active">
  <th scope="row">2</th>
  <td>Socrates Itumay</td>
  <td>Software Engineer</td>
  <td>Computer Engineering</td>
  <td>$150,000</td>
</tr>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section5" className="main-subtitle">Color Variants</h5>
          <p>Use contextual classes to color tables, table rows or individual cells.</p>

          <Card className="card-example">
            <Card.Body>
              <Table variant="primary">
                <thead>
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Job Title</th>
                    <th scope="col">Degree</th>
                    <th scope="col">Salary</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Adrian Monino</td>
                    <td>Front-End Engineer</td>
                    <td>Computer Science</td>
                    <td>$120,000</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Socrates Itumay</td>
                    <td>Software Engineer</td>
                    <td>Computer Engineering</td>
                    <td>$150,000</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Reynante Labares</td>
                    <td>Product Manager</td>
                    <td>Business Management</td>
                    <td>$250,000</td>
                  </tr>
                </tbody>
              </Table>

              <Table className="mb-0" variant="success">
                <thead>
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Job Title</th>
                    <th scope="col">Degree</th>
                    <th scope="col">Salary</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Adrian Monino</td>
                    <td>Front-End Engineer</td>
                    <td>Computer Science</td>
                    <td>$120,000</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Socrates Itumay</td>
                    <td>Software Engineer</td>
                    <td>Computer Engineering</td>
                    <td>$150,000</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Reynante Labares</td>
                    <td>Product Manager</td>
                    <td>Business Management</td>
                    <td>$250,000</td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<Table variant="primary">...</Table>
<Table variant="success">...</Table>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section6" className="main-subtitle">Table Borders</h5>
          <p>Add <code>bordered</code> props for borders on all sides of the table and cells. Add <code>borderless</code> props for a table without borders.</p>

          <Card className="card-example">
            <Card.Body>
              <Table bordered className="mb-0">
                <thead>
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Job Title</th>
                    <th scope="col">Degree</th>
                    <th scope="col">Salary</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Adrian Monino</td>
                    <td>Front-End Engineer</td>
                    <td>Computer Science</td>
                    <td>$120,000</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Socrates Itumay</td>
                    <td>Software Engineer</td>
                    <td>Computer Engineering</td>
                    <td>$150,000</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Reynante Labares</td>
                    <td>Product Manager</td>
                    <td>Business Management</td>
                    <td>$250,000</td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<Table bordered className="mb-0">...</Table>`}</code></pre>
            </Card.Footer>
          </Card>

          <Card className="card-example">
            <Card.Body>
              <Table borderless className="mb-0">
                <thead>
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Job Title</th>
                    <th scope="col">Degree</th>
                    <th scope="col">Salary</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Adrian Monino</td>
                    <td>Front-End Engineer</td>
                    <td>Computer Science</td>
                    <td>$120,000</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Socrates Itumay</td>
                    <td>Software Engineer</td>
                    <td>Computer Engineering</td>
                    <td>$150,000</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Reynante Labares</td>
                    <td>Product Manager</td>
                    <td>Business Management</td>
                    <td>$250,000</td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<Table borderless className="mb-0">...</Table>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section7" className="main-subtitle">Small Table</h5>
          <p>Add <code>size</code> props to make any table more compact by cutting all cell padding in half.</p>

          <Card className="card-example">
            <Card.Body>
              <Table size="sm" className="mb-0">
                <thead>
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Job Title</th>
                    <th scope="col">Degree</th>
                    <th scope="col">Salary</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Adrian Monino</td>
                    <td>Front-End Engineer</td>
                    <td>Computer Science</td>
                    <td>$120,000</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Socrates Itumay</td>
                    <td>Software Engineer</td>
                    <td>Computer Engineering</td>
                    <td>$150,000</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Reynante Labares</td>
                    <td>Product Manager</td>
                    <td>Business Management</td>
                    <td>$250,000</td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<Table size="sm" className="mb-0">...</Table>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section8" className="main-subtitle">Responsive Table</h5>
          <p>Responsive tables allow tables to be scrolled horizontally with ease. Make any table responsive across all viewports by wrapping a table with props <code>responsive</code>.</p>

          <Card className="card-example">
            <Card.Body>
              <Table responsive className="mb-0">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Heading</th>
                    <th scope="col">Heading</th>
                    <th scope="col">Heading</th>
                    <th scope="col">Heading</th>
                    <th scope="col">Heading</th>
                    <th scope="col">Heading</th>
                    <th scope="col">Heading</th>
                    <th scope="col">Heading</th>
                    <th scope="col">Heading</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-html">{`<Table responsive className="mb-0">...</Table>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br /><br /><br /><br />

          <h2 className="main-title">Grid.js</h2>
          <p className="main-title-text">Grid.js is a table plugin written in TypeScript. It is developed to be used with all popular JavaScript frameworks include React, Angular.js, Vue or without any frameworks! </p>

          <br /><br />

          <h5 id="section9" className="main-subtitle">Basic Example</h5>
          <p>In this examples, we load the data from an existing HTML table.</p>

          <Card className="card-example">
            <Card.Body>
              <Grid
                data={[
                  ['1', 'Adrian Monino', 'Front-End Engineer', 'Computer Science', '$120,000'],
                  ['2', 'Socrates Itumay', 'Software Engineer', 'Computer Engineering', '$150,000'],
                  ['3', 'Reynante Labares', 'Product Manager', 'Business Management', '$250,000']
                ]}
                columns={['ID', 'Name', 'Job Title', 'Degree', 'Salary']}
                search={false}
                pagination={false}
                className={{
                  table: 'table table-bordered mb-0'
                }}
              />
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-js">{`<Grid
  data={[
    ['1', 'Adrian Monino', 'Front-End Engineer', 'Computer Science', '$120,000'],
    ['2', 'Socrates Itumay', 'Software Engineer', 'Computer Engineering', '$150,000'],
    ['3', 'Reynante Labares', 'Product Manager', 'Business Management', '$250,000']
  ]}
  columns={['ID', 'Name', 'Job Title', 'Degree', 'Salary']}
  search={false}
  pagination={false}
  className={{
    table: 'table table-bordered mb-0'
  }}
/>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section10" className="main-subtitle">Pagination</h5>
          <p>Pagination can be enabled by setting <code>{`pagination={true}`}</code>.</p>

          <Card className="card-example">
            <Card.Body>
              <Grid
                data={[
                  ['1', 'Adrian Monino', 'Front-End Engineer', 'Computer Science', '$120,000'],
                  ['2', 'Socrates Itumay', 'Software Engineer', 'Computer Engineering', '$150,000'],
                  ['3', 'Reynante Labares', 'Product Manager', 'Business Management', '$250,000']
                ]}
                columns={['ID', 'Name', 'Job Title', 'Degree', 'Salary']}
                search={false}
                pagination={true}
                className={{
                  table: 'table table-bordered mb-0'
                }}
              />
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-js">{`<Grid
  data={[
    ['1', 'Adrian Monino', 'Front-End Engineer', 'Computer Science', '$120,000'],
    ['2', 'Socrates Itumay', 'Software Engineer', 'Computer Engineering', '$150,000'],
    ['3', 'Reynante Labares', 'Product Manager', 'Business Management', '$250,000']
  ]}
  columns={['ID', 'Name', 'Job Title', 'Degree', 'Salary']}
  search={false}
  pagination={true}
  className={{
    table: 'table table-bordered mb-0'
  }}
/>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section11" className="main-subtitle">Search</h5>
          <p>Supports global search on all rows and columns. Set <code>search: true</code> to enable the search plugin.</p>

          <Card className="card-example">
            <Card.Body>
              <Grid
                data={[
                  ['1', 'Adrian Monino', 'Front-End Engineer', 'Computer Science', '$120,000'],
                  ['2', 'Socrates Itumay', 'Software Engineer', 'Computer Engineering', '$150,000'],
                  ['3', 'Reynante Labares', 'Product Manager', 'Business Management', '$250,000']
                ]}
                columns={['ID', 'Name', 'Job Title', 'Degree', 'Salary']}
                search={true}
                pagination={true}
                className={{
                  table: 'table table-bordered mb-0'
                }}
              />
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-js">{`<Grid
  data={[
    ['1', 'Adrian Monino', 'Front-End Engineer', 'Computer Science', '$120,000'],
    ['2', 'Socrates Itumay', 'Software Engineer', 'Computer Engineering', '$150,000'],
    ['3', 'Reynante Labares', 'Product Manager', 'Business Management', '$250,000']
  ]}
  columns={['ID', 'Name', 'Job Title', 'Degree', 'Salary']}
  search={true}
  pagination={true}
  className={{
    table: 'table table-bordered mb-0'
  }}
/>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section12" className="main-subtitle">Sorting</h5>
          <p>To enable sorting, simply add <code>{`sort={true}`}</code> to your config.</p>

          <Card className="card-example">
            <Card.Body>
              <Grid
                data={[
                  ['Adrian Monino', 'Front-End Engineer', 'Computer Science', '$120,000'],
                  ['Socrates Itumay', 'Software Engineer', 'Computer Engineering', '$150,000'],
                  ['Reynante Labares', 'Product Manager', 'Business Management', '$250,000']
                ]}
                columns={['Name', 'Job Title', 'Degree', 'Salary']}
                search={true}
                pagination={true}
                sort={true}
                className={{
                  table: 'table table-bordered mb-0'
                }}
              />
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-js">{`<Grid
  data={[
    ['1', 'Adrian Monino', 'Front-End Engineer', 'Computer Science', '$120,000'],
    ['2', 'Socrates Itumay', 'Software Engineer', 'Computer Engineering', '$150,000'],
    ['3', 'Reynante Labares', 'Product Manager', 'Business Management', '$250,000']
  ]}
  columns={['ID', 'Name', 'Job Title', 'Degree', 'Salary']}
  search={true}
  pagination={true}
  sort={true}
  className={{
    table: 'table table-bordered mb-0'
  }}
/>`}</code></pre>
            </Card.Footer>
          </Card>

          <br /><br /><br />

          <h5 id="section13" className="main-subtitle">Resizable Columns</h5>
          <p>Simply add <code>resizable: true</code> to your config to enable resizable columns.</p>

          <Card className="card-example">
            <Card.Body>
              <Grid
                data={[
                  ['Adrian Monino', 'Front-End Engineer', 'Computer Science', '$120,000'],
                  ['Socrates Itumay', 'Software Engineer', 'Computer Engineering', '$150,000'],
                  ['Reynante Labares', 'Product Manager', 'Business Management', '$250,000']
                ]}
                columns={['Name', 'Job Title', 'Degree', 'Salary']}
                search={true}
                pagination={true}
                sort={true}
                resizable={true}
                className={{
                  table: 'table table-bordered mb-0'
                }}
              />
            </Card.Body>
            <Card.Footer>
              <pre><code className="language-js">{`<Grid
  data={[
    ['1', 'Adrian Monino', 'Front-End Engineer', 'Computer Science', '$120,000'],
    ['2', 'Socrates Itumay', 'Software Engineer', 'Computer Engineering', '$150,000'],
    ['3', 'Reynante Labares', 'Product Manager', 'Business Management', '$250,000']
  ]}
  columns={['ID', 'Name', 'Job Title', 'Degree', 'Salary']}
  search={true}
  pagination={true}
  sort={true}
  resizable={true}
  className={{
    table: 'table table-bordered mb-0'
  }}
/>`}</code></pre>
            </Card.Footer>
          </Card>

        </Container>

        <Nav id="navDocs" className="nav-docs">
          <label>Bootstrap Table</label>
          <Nav.Link href="#section1">Basic Example</Nav.Link>
          <Nav.Link href="#section2">Striped Rows</Nav.Link>
          <Nav.Link href="#section3">Hoverable Rows</Nav.Link>
          <Nav.Link href="#section4">Active Rows</Nav.Link>
          <Nav.Link href="#section5">Color Variants</Nav.Link>
          <Nav.Link href="#section6">Table Borders</Nav.Link>
          <Nav.Link href="#section7">Small Table</Nav.Link>
          <Nav.Link href="#section8">Responsive Table</Nav.Link>

          <hr />

          <label>Grid JS</label>
          <Nav.Link href="#section9">Basic Example</Nav.Link>
          <Nav.Link href="#section10">Pagination</Nav.Link>
          <Nav.Link href="#section11">Search</Nav.Link>
          <Nav.Link href="#section12">Sorting</Nav.Link>
          <Nav.Link href="#section13">Resizable Columns</Nav.Link>
        </Nav>
      </div>
      <Footer />
    </React.Fragment>
  );
}