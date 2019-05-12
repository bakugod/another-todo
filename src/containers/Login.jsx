import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {withStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
    },
    grid: {
        display: "grid"
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit
    },
    button: {
        margin: theme.spacing.unit,
    },
});

class Login extends Component {
    state = {
        login: '',
        password: '',
    }

    loggedIn = localStorage.getItem('loggedIn');

    fakeLogin = () => {
        if (this.state.login === 'admin' && this.state.password === '123') {
            localStorage.setItem('loggedIn', true);
            this.props.history.push('/');
        }
    }

    fakeLogout = () => {
        if (this.loggedIn !== null){
            localStorage.removeItem("loggedIn");
            this.props.history.push('/');
        }
    }

    setInputValue = (name) => (e) => {
        this.setState({[name]: e.target.value});
    }

    render() {
        const { classes } = this.props;
        const { login, password } = this.state;

        return (
            <section className={classes.root}>{this.loggedIn === null
                ? <form className={classes.grid}>
                    <>
                        <TextField
                            className={classes.textField}
                            id="outlined-login-input"
                            label="login"
                            type="login"
                            value={login}
                            onChange={this.setInputValue('login')}
                            name="login"
                            autoComplete="login"
                            margin="normal"
                            variant="outlined"
                        />
                    </>
                    <>
                        <TextField
                            className={classes.textField}
                            id="outlined-password-input"
                            label="Password"
                            type="password"
                            name="password"
                            value={password}
                            onChange={this.setInputValue('password')}
                            autoComplete="password"
                            margin="normal"
                            variant="outlined"
                        />
                    </>
                    <div className={classes.grid}>
                        <Button onClick={this.fakeLogin} variant="contained" color="primary" className={classes.button}>
                            Login
                        </Button>
                    </div>
                </form>
                : <article>
                    <h1>You sure?</h1>
                    <Button onClick={this.fakeLogout} variant="contained" color="primary">
                        Logout
                    </Button>
                </article>}
            </section>
        );
    }
}

Login.propTypes = {
    login: PropTypes.func,
    classes: PropTypes.object,
    history: PropTypes.object
};

export default withStyles(styles)(Login);