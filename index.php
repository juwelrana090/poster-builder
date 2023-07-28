<!DOCTYPE html>
<html class="h-full bg-gray-100 m-0">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://cdn.tailwindcss.com"></script>
</head>

<body class="w-screen h-full m-0 font-sans">
  <div id="app" class="w-full h-full px-2 grid grid-cols-2 gap-8">
    <div class="w-full h-[90vh] p-4 mt-4 rounded border-2 border-indigo-200 "
      style="border-top-style: dotted; border-bottom-style: dotted">
      <div class="w-full h-10 -mt-[30px] flex items-center justify-center bg-white rounded text-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path fill-rule="evenodd"
            d="M15.528 2.973a.75.75 0 0 1 .472.696v8.662a.75.75 0 0 1-.472.696l-7.25 2.9a.75.75 0 0 1-.557 0l-7.25-2.9A.75.75 0 0 1 0 12.331V3.669a.75.75 0 0 1 .471-.696L7.443.184l.004-.001.274-.11a.75.75 0 0 1 .558 0l.274.11.004.001 6.971 2.789Zm-1.374.527L8 5.962 1.846 3.5 1 3.839v.4l6.5 2.6v7.922l.5.2.5-.2V6.84l6.5-2.6v-.4l-.846-.339Z" />
        </svg>
        <span class="text-gray-800 font-normal text-lg">Components</span>
      </div>

      <div class="w-full mt-5 rounded border-2">
        <div class="w-full h-10 -mt-[20px] px-1 flex justify-between items-center">
          <span class="px-3 rounded-full bg-white text-gray-800 font-normal text-base">Heading</span>
          <span class="p-1 rounded-full bg-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#e00" class="text-red"
              viewBox="0 0 16 16">
              <path
                d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg>
          </span>
        </div>
      </div>

      <div class="w-full mt-5 rounded border-2">
        <div class="w-full h-10 -mt-[20px] px-1 flex justify-between items-center">
          <span class="px-3 rounded-full bg-white text-gray-800 font-normal text-base">Image</span>
          <span class="p-1 rounded-full bg-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#e00" class="text-red"
              viewBox="0 0 16 16">
              <path
                d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg>
          </span>
        </div>
      </div>

      <div class="w-full mt-5 rounded border-2">
        <div class="w-full h-10 -mt-[20px] px-1 flex justify-between items-center">
          <span class="px-3 rounded-full bg-white text-gray-800 font-normal text-base">Description</span>
          <span class="p-1 rounded-full bg-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#e00" class="text-red"
              viewBox="0 0 16 16">
              <path
                d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg>
          </span>
        </div>
      </div>
    </div>

    <div class="w-full h-[90vh] p-4 mt-4 rounded border-2 border-gray-200 "
      style="border-top-style: dotted; border-bottom-style: dotted">
      <div class="w-full h-10 -mt-[30px] flex items-center justify-center bg-white rounded text-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
          viewBox="0 0 16 16">
          <path fill-rule="evenodd"
            d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
          <path
            d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
          <path
            d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
        </svg>
        <span class="text-gray-800 font-normal text-lg">Preview</span>
      </div>
    </div>
  </div>
  </div>
</body>
<script type="text/javascript" src="js/index.js"></script>

</html>