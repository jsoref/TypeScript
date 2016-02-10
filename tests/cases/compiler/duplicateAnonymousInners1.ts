module Foo {

    class Helper {

    }
    
    class Inner {}
    // Inner should show up in IntelliSense
    
    export var Outer=0;
}


module Foo {
    
    // Should not be an error
    class Helper {

    }
    
    // Inner should not show up in IntelliSense
    // Outer should show up in IntelliSense

}
