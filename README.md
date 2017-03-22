# Angular Cloudinary File Upload

This repo contains a demo of uploading an image to a a Cloudinary server from angular

## Versions

It contains 4 versions labeled w/ tags:

### `simple-upload`

This is a simple version of uploading a file to a folder `/uploads` in our server 

### `cloudinary`

This version uploads the file to a folder `/uploads` in our server and then takes this file and uploads it to our Cloudinary _cloud_

Cloudinary will return a url that we can use to show the image and to store in DB

### `bootstrap`

This version improves the UI by using bootstrap to display the elements involved in the upload of the image

### `spinning`

This version add a spinning icon that will be shown rotating while the image is uploading and loaded into our page

## Installation 

You can _download_ this repo by cloning it into your machine

```
git clone https://github.com/juanmaguitar/angular-express-cloudinary-file-upload.git
```

After this, you can go to a specifig version/tag by doing...

```
git checkout tags/bootstrap
```
