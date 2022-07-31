## How To Use 🔧

From your command line, first clone Simplefolio:

```bash
# Clone the repository
$ git clone https://github.com/mehul1011/tax-calculator.git

# Move into the repository
$ cd tax-calculator

# Remove the current origin repository
$ git remote remove origin
```

After that, you can install the dependencies either using NPM or Yarn.

Using NPM: Simply run the below commands.

```bash
# Install dependencies
$ npm install

# Start the development server
$ npm start
```

Using Yarn: Be aware of that you'll need to delete the `package-lock.json` file before executing the below commands.

```bash
# Install dependencies
$ yarn

# Start the development server
$ yarn start
```

**NOTE**:
If your run into issues installing the dependencies with NPM, use this below command:

```bash
# Install dependencies with all permissions
$ sudo npm install --unsafe-perm=true --allow-root
```

## Future improvement plan

- Maintaining states with help of redux
- Storing data of users in database and then re-routing to their final calculated salary page.
