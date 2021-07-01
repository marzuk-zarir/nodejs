/**
 * ! Stream
 * ? stream means a short package of big data for better user experience
 * * when we watch a video on yt...the video is not downloaded at a time
 * * video's data are loaded with stream
 *
 * ! there is 3 kinds of Stream in nodejs:
 * ? readStream => this stream of data is creating for read
 * ? writeStream => this stream of data is creating for write
 * ? Duplex streams => To create a stream that is both readable and writable at the same time. We can read and write to a duplex stream (say, a socket connection between a client and a server).
 *
 * ! Buffer
 * ? buffer means chunk of streamed data
 * * in nodejs buffer is almost like a data type
 * * buffer can not readable bcz its encoded into binary formate
 */

//  Stream opened...
//  ---------------------------------
//  <Buffer 4c 6f 72 65 6d 20 69 70 72 20 61 64 69 70 69 73 63 69 6e 67 ... >
//  ---------------------------------
//  ---------------------------------
//  <Buffer 74 20 6e 75 6e 63 20 76 69 74 61 65 20 66 65 72 6d 65 69 62 75 ... >
//  ---------------------------------
//  ---------------------------------
//  <Buffer 20 76 69 74 61 65 20 ... >
//  ---------------------------------
//  Stream Closed...
