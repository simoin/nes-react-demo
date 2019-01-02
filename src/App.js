import React, {
  Component
} from 'react';

import {
  Container, Button, Radios, Checkbox, TextInput, TextArea, Avatar,
  Balloon, List, Table, Progress, Icon, Sprite, ControllerIcon
} from 'nes-react';
import './App.css';

class App extends Component {
  state = {
    selectedRadioValue: "yes",
    boxChecked: false,
    textInput: "",
    successInput: "",
    warningInput: "",
    errorInput: "",
    textareaInput: ""
  };

  handleRadioSelect(value) {
    this.setState({ selectedRadioValue: value });
  }

  toggleCheckBox(checkBoxName) {
    this.setState({
      [`${checkBoxName}Checked`]: !this.state[`${checkBoxName}Checked`]
    });
  }

  render() {
    const {
      selectedRadioValue,
      boxChecked,
      textInput,
      successInput,
      warningInput,
      errorInput,
      textareaInput
    } = this.state;

    return (
      <div className="App" >
        <header>
          <h1>
            <ControllerIcon style={{ margin: "0 1rem 0 0" }} controller="snes" key="snes" />
            NES-React
          </h1>
          <p>A React component library based on the awesome <a href="https://github.com/BcRikko/NES.css">nes.css</a></p>
        </header>
        <Container title="Buttons">
          <Button>Normal</Button>
          <Button primary>Primary</Button>
          <Button success>Success</Button>
          <Button warning>Warning</Button>
          <Button error>Error</Button>
          <Button disabled>Disabled</Button>
        </Container>
        <Container title="Containers">
          <div>
            <Container style={{ display: "inline-block", margin: "0 1rem 1rem 0", maxWidth: "400px" }} title="Container.is-centered" centered>
              Good morning. Thou hast had a good night's sleep, I hope.
            </Container>
            <Container style={{ display: "inline-block", margin: "0 1rem 1rem 0", maxWidth: "400px" }} title="Container.is-dark" dark>
              Good morning. Thou hast had a good night's sleep, I hope.
            </Container>
            <Container style={{ display: "inline-block", margin: "0 1rem 1rem 0", maxWidth: "400px" }} rounded>
              Good morning. Thou hast had a good night's sleep, I hope.
            </Container>
            <Container style={{ display: "inline-block", maxWidth: "400px" }} dark rounded>
              Good morning. Thou hast had a good night's sleep, I hope.
            </Container>
          </div>
        </Container>
        <Container title="Radios">
          <Radios
            selectedValue={selectedRadioValue}
            options={[
              {
                value: "yes",
                label: "yes"
              },
              {
                value: "no",
                label: "no"
              }
            ]}
            onValueChange={this.handleRadioSelect.bind(this)}
          ></Radios>
        </Container>
        <Container title="Checkboxes">
          <Checkbox
            checked={boxChecked}
            label="Enable"
            onSelect={() => this.toggleCheckBox("box")}
          />
        </Container>
        <Container title="Avatars">
          <Avatar src="https://www.gravatar.com/avatar" small />
          <Avatar src="https://www.gravatar.com/avatar" />
          <Avatar src="https://www.gravatar.com/avatar" medium />
          <Avatar src="https://www.gravatar.com/avatar" large />
          <Avatar src="https://www.gravatar.com/avatar" small rounded />
          <Avatar src="https://www.gravatar.com/avatar" rounded />
          <Avatar src="https://www.gravatar.com/avatar" medium rounded />
          <Avatar src="https://www.gravatar.com/avatar" large rounded />
        </Container>
        <Container title="Form">
          <TextInput
            label="Your name"
            placeholder=""
            value={textInput}
            onChange={e => this.setState({ textInput: e.target.value })}
          />
          <TextInput
            label=".input.is-success"
            labelInline
            success
            placeholder="NES.css"
            value={successInput}
            onChange={e => this.setState({ successInput: e.target.value })}
          />
          <TextInput
            label=".input.is-warning"
            labelInline
            warning
            placeholder="8bit.css"
            value={warningInput}
            onChange={e => this.setState({ warningInput: e.target.value })}
          />
          <TextInput
            label=".input.is-error"
            labelInline
            error
            placeholder="awesome.css"
            value={errorInput}
            onChange={e => this.setState({ errorInput: e.target.value })}
          />
          <TextArea style={{ minHeight: "4rem" }}
            label="Textarea"
            value={textareaInput}
            onChange={e => this.setState({ textareaInput: e.target.value })}
          />
        </Container>
        <Container title="Balloons">
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "inline-flex", alignSelf: "flex-start" }}>
              <Sprite sprite="bcrikko" style={{ alignSelf: "flex-end" }}></Sprite>
              <Balloon style={{ margin: "2rem", maxWidth: "600px" }} fromLeft>
                Hello NES.css
            </Balloon>
            </div>
            <div style={{ display: "inline-flex", alignSelf: "flex-end" }}>
              <Balloon style={{ margin: "2rem", maxWidth: "600px" }} fromRight>
                Good morning. Thou hast had a good night's sleep, I hope.
            </Balloon>
              <Sprite sprite="bcrikko" style={{ alignSelf: "flex-end" }}></Sprite>
            </div>
          </div>
        </Container>
        <Container title="Lists">
          <List>
            <li>Good morning.</li>
            <li>Thou hast had a good night's sleep, I hope.</li>
            <li>Thou hast had a good afternoon</li>
            <li>Good night.</li>
          </List>
          <List solid>
            <li>Good morning.</li>
            <li>Thou hast had a good night's sleep, I hope.</li>
            <li>Thou hast had a good afternoon</li>
            <li>Good night.</li>
          </List>
        </Container>
        <Container title="Table">
          <Table centered>
            <thead>
              <tr>
                <th>Table</th>
                <th>Table.is-centered</th>
                <th>Table.is-centered</th>
                <th>Table.is-centered</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Thou hast had a good morning</td>
                <td>Thou hast had a good afternoon</td>
                <td>Thou hast had a good evening</td>
                <td>Thou hast had a good night</td>
              </tr>
              <tr>
                <td>Thou hast had a good morning</td>
                <td>Thou hast had a good afternoon</td>
                <td>Thou hast had a good evening</td>
                <td>Thou hast had a good night</td>
              </tr>
            </tbody>
          </Table>
          <Table bordered centered>
            <thead>
              <tr>
                <th>Table.is-bordered</th>
                <th>Table.is-centered</th>
                <th>Table.is-centered</th>
                <th>Table.is-centered</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Thou hast had a good morning</td>
                <td>Thou hast had a good afternoon</td>
                <td>Thou hast had a good evening</td>
                <td>Thou hast had a good night</td>
              </tr>
              <tr>
                <td>Thou hast had a good morning</td>
                <td>Thou hast had a good afternoon</td>
                <td>Thou hast had a good evening</td>
                <td>Thou hast had a good night</td>
              </tr>
            </tbody>
          </Table>
          <Table bordered centered dark>
            <thead>
              <tr>
                <th>Table.is-bordered</th>
                <th>Table.is-centered</th>
                <th>Table.is-centered</th>
                <th>Table.is-centered</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Thou hast had a good morning</td>
                <td>Thou hast had a good afternoon</td>
                <td>Thou hast had a good evening</td>
                <td>Thou hast had a good night</td>
              </tr>
              <tr>
                <td>Thou hast had a good morning</td>
                <td>Thou hast had a good afternoon</td>
                <td>Thou hast had a good evening</td>
                <td>Thou hast had a good night</td>
              </tr>
            </tbody>
          </Table>
        </Container>
        <Container title="Progress">
          <Progress value={90} max={100} />
          <Progress value={80} max={100} primary />
          <Progress value={70} max={100} success />
          <Progress value={60} max={100} warning />
          <Progress value={50} max={100} error />
          <Progress value={40} max={100} pattern />
        </Container>
        <Container title="Icons">
          <Container title="Reaction">
            <Icon icon="heart" small />
            <Icon icon="heart" />
            <Icon icon="heart" medium />
            <Icon icon="heart" large />
            <Icon icon="heart" transparent /> {/* small switch to transparent */}
            <Icon icon="star" small />
            <Icon icon="star" />
            <Icon icon="star" medium />
            <Icon icon="star" large />
            <Icon icon="star" half />
            <Icon icon="star" half medium/>
            <Icon icon="star" half large/>
            <Icon icon="star" empty />
            <Icon icon="star" empty medium/>
            <Icon icon="star" empty large/>
            <Icon icon="star" transparent/>
            <Icon icon="like" small />
            <Icon icon="like" />
            <Icon icon="like" medium />
            <Icon icon="like" large />
            <Icon icon="like" transparent />
          </Container>
          <Container title="SNS">
            <Icon icon="twitter" small/>
            <Icon icon="twitter" />
            <Icon icon="twitter" medium/>
            <Icon icon="twitter" large/>
            <Icon icon="facebook" small/>
            <Icon icon="facebook" />
            <Icon icon="facebook" medium/>
            <Icon icon="facebook" large/>
            <Icon icon="github" small/>
            <Icon icon="github" />
            <Icon icon="github" medium/>
            <Icon icon="github" large/>
            <Icon icon="youtube" small/>
            <Icon icon="youtube" />
            <Icon icon="youtube" medium/>
            <Icon icon="youtube" large/>
            <Icon icon="medium" small/>
            <Icon icon="medium" />
            <Icon icon="medium" medium/>
            <Icon icon="medium" large/>
            <Icon icon="twitch" small/>
            <Icon icon="twitch" />
            <Icon icon="twitch" medium/>
            <Icon icon="twitch" large/>
            <Icon icon="reddit" small/>
            <Icon icon="reddit" />
            <Icon icon="reddit" medium/>
            <Icon icon="reddit" large/>
            <Icon icon="whatsapp" small/>
            <Icon icon="whatsapp" />
            <Icon icon="whatsapp" medium/>
            <Icon icon="whatsapp" large/>
            <Icon icon="gmail" small/>
            <Icon icon="gmail" />
            <Icon icon="gmail" medium/>
            <Icon icon="gmail" large/>
            <Icon icon="linkedin" small/>
            <Icon icon="linkedin" />
            <Icon icon="linkedin" medium/>
            <Icon icon="linkedin" large/>
          </Container>
          <Container title="Other">
            <Icon icon="close" small/>
            <Icon icon="close" />
            <Icon icon="close" medium/>
            <Icon icon="close" large/>
            <Sprite sprite="octocat"  key="octocat"/>
            <Icon icon="trophy" small/>
            <Icon icon="trophy" />
            <Icon icon="trophy" medium/>
            <Icon icon="trophy" large/>
            <Sprite sprite="mario"  key="mario"/>
            <Sprite sprite="ash"  key="octocat"/>
            <Sprite sprite="pokeball"  key="pokeball"/>
            <Sprite sprite="bulbasaur"  key="bulbasaur"/>
            <Sprite sprite="charmander"  key="charmander"/>
            <Sprite sprite="squirtle"  key="squirtle"/>
            <Sprite sprite="smartphone"  key="smartphone"/>
            <Sprite sprite="phone"  key="phone"/>
            <Sprite sprite="kirby"  key="kirby"/>
            <Sprite sprite="bcrikko"  key="bcrikko"/>
          </Container>
          <Container title="Controllers">
            <ControllerIcon style={{ margin: 5 }} controller="nes" key="nes"/>
            <ControllerIcon style={{ margin: 5 }} controller="nes-jp" key="nes-jp"/>
            <ControllerIcon style={{ margin: 5 }} controller="snes" key="snes"/>
            <ControllerIcon style={{ margin: 5 }} controller="snes-jp" key="snes-jp"/>
          </Container>
        </Container>
      </div>
    );
  }
}

export default App;