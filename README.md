
### An implementation of the component that emulates the operation of a slider. 

The component takes as input the "image" property, which contains a list of paths to images. The component displays them and allows you to navigate through them using the forward and back arrows. The transition itself is looped. Pictures (paths to them) can be repeated.

#### The behavior is described below:
- If the last picture is selected, then next leads to the first one. The same thing happens with prev, but in reverse.
- The first picture becomes active. The order of the pictures and their display must be preserved.
