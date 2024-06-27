export function App() {
    const test = {
        prop1: "Hello",
        prop2: 1,
        prop3: true,
        prop4: "World",
        prop5: 2,
        prop6: false,
        prop7: "This",
        prop8: 3,
        prop9: true,
        prop10: "is",
        prop11: 4,
        prop12: false,
        prop13: "a",
        prop14: 5,
        prop15: true,
        prop16: "test",
        prop17: 6,
        prop18: false,
        prop19: "of",
        prop20: 7,
    }

    return (
        <div>
            <MyComponent
                prop1="Hello"
                prop2={1}
                prop3={true}
                prop4="World"
                prop5={2}
                prop6={false}
                prop7="This"
                prop8={3}
                prop9={true}
                prop10="is"
                prop11={4}
                prop12={false}
                prop13="a"
                prop14={5}
                prop15={true}
                prop16="test"
                prop17={6}
                prop18={false}
                prop19="of"
                prop20={7}
            >
                <div>Hello</div>
            </MyComponent>
            <MyComponent
                prop1="Hello"
                prop2={1}
                prop3={true}
                prop4="World"
                prop5={2}
                prop6={false}
                prop7="This"
                prop8={3}
                prop9={true}
                prop10="is"
                prop11={4}
                prop12={false}
                prop13="a"
                prop14={5}
                prop15={true}
                prop16="test"
                prop17={6}
                prop18={false}
                prop19="of"
                prop20={7}
            >
                <div>Bye</div>
            </MyComponent>
            <MyComponent
                prop1="Hello"
                prop2={1}
                prop3={true}
                prop4="World"
                prop5={2}
                prop6={false}
                prop7="This"
                prop8={3}
                prop9={true}
                prop10="is"
                prop11={4}
                prop12={false}
                prop13="a"
                prop14={5}
                prop15={true}
                prop16="test"
                prop17={6}
                prop18={false}
                prop19="of"
                prop20={7}
            >
                <div>ABC</div>
            </MyComponent>
        </div>
    )
}

