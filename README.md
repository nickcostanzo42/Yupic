# Yupic
Yupic is a social media app built in react-native, built for the purpose of allowing users to connect and share photos as status updates.

This project used React, React-Native, Redux, and Firebase.  Xcode and Adroid Stuido IDE's were used for simulation, and most of the 
code was written in Sublime.

I wanted to learn how to use React-native so I first completed 'The Complete React Native and Redux course' on Udemy.com.  I modeled user
auth in a similar way to the tutorial.  Because firebase is a nosql database and wanted to implement a user search based on email address, 
I had to create a seperate list of data that created references to the users unique ID's using unique e-mails (1:1 ratio).

When users update their username or status, it's a quick write on firebase on a press event.  Redux managed the state for all text inputs, 
and most firebase calls were preformed in the backend.  It was only used once in the user feed component in order to populate the list 
view.

In order to allow users to follow each other and get a feed of content from other users I created another list of data within each user's
data that would save the email address of everyone they follow to an 'employees' list.  Whenever the user goes to the 'your people's'
page there is a call to firebase using the followers list email references to collect data, and populated the view list.

Still having trouble getting all images to format properly.



