export default [
  {
    group: 'Components',
    name: 'Button',
    code: `
       <View gap={3}>
        <View gap={3} direction="row">
          <Button color="primary">
            Solid button
          </Button>
          <Button color="primary" variant="faded">
            Faded button
          </Button>
          <Button color="primary" variant="outline">
            Outline button
          </Button>
          <Button color="primary" variant="ghost">
            Ghost button
          </Button>
        </View>

        <View gap={3} direction="row">
          <Button color="critical">
            Solid button
          </Button>
          <Button color="critical" variant="faded">
            Faded button
          </Button>
          <Button color="critical" variant="outline">
            Outline button
          </Button>
          <Button color="critical" variant="ghost">
            Ghost button
          </Button>
        </View>

        <View gap={3} direction="row">
          <Button color="positive">
            Solid button
          </Button>
          <Button color="positive" variant="faded">
            Faded button
          </Button>
          <Button color="positive" variant="outline">
            Outline button
          </Button>
          <Button color="positive" variant="ghost">
            Ghost button
          </Button>
        </View>
      </View>
    `,
  },
];
