tinymce.init({
    selector: 'textarea#default',
    width: 1000,
    height: 300,
    plugins: [
        'advlist', 'autolink', 'link', 'image', 'lists', 'charmap', 'preview', 'anchor', 'pagebreak',
        'searchreplace', 'wordcount', 'visualblocks', 'code', 'fullscreen', 'insertdatetime', 'media',
        'table', 'emoticons', 'template', 'codesample'
    ],
    toolbar: 'undo redo | styles | bold italic underline| aligncenter alignright alignjustify ' +
    'bullist numlist outdent | link image | print preview media fullscreen | ' +
    'forcecolor backcolor emotions',
    menu: {
        favs: {title: 'menu', items: 'code visualaid | searchplace | emoticons'}
    }
    menubar: 'favs file edit view insert format tools table',
    content_style: 'body{font-family:Helve,Arial,San-serif; font-size: 16px}'
  });