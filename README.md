# Field-of-Bokeh

## How to open the electronics

1. If you do not have Max 8, please download it from [Cycling'74](https://cycling74.com/downloads). You can run this piece in Max without a liscense.
2. Download the most recent release of [Field of Bokeh](https://github.com/composingcap/Field-of-Bokeh/releases/latest)
3. Unzip the folder to the location of your choosing. *Do not rename the folders inside of the release.*
4. Open Field-of-Bokeh/Field-of-Bokeh.maxproj

## Web based score
- When it is loaded Field of Bokeh hosts a score webpage on a local server. This means if a device is connected to the same network as the computer running the piece you should be able to access the score using the local IP of the computer at port 8086. This number can be found in the patch labled as "Host" and will look something like 197.1.1.5:8086. 
- You will need to select which player you are (for part 3). You can do this by setting the list in the top left to your assigned letter.
- The score will give a timer when the page it about to transition in the top slider.
- This score will turn pages automatically with the computer and give some information about where you are in a section via the lower slider.

## Seting up the mixer
Pressing the "Open Mixer" button will open an internal mixer for the piece. This will give you rough control of the level of each effect as well as EQ on the input and output. You can also change the speaker configuration here from Quad to Stereo if you are rehersing the piece of playing it in a venue with a stereo setup. 

To save settings you can press shift and click on a boc in the the "preset" object (the one tieh the boxes in the upper right) and then save the patch. To load a preset you can click one of the boxes. 

## Changing score timings

If the timings the computer determins do not work with the performance setup, then these are adjustable using the "Score Overrides" button. The piece transitions from section to section using a combination of a total amount of time and a number of detected onsets. You can adust these by their number or adjust both using a scale. If you want the section to be 2 times as long, set a phase scaler to 2. 

Once you set your times press the "save override button" and the patch will save your changes. 

## How to start the piece
To start the piece make sure the audio is on and select "Start / Restart." The page will change to the first page of the score and the score will begin when it hears the first note. 

