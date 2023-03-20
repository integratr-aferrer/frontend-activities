<template>
  <section v-if="editor">
    <h3 class="display-5">Create News</h3>
    <form class="mt-5" @submit.prevent="createNews">
      <div class="input-group mb-3">
        <span class="input-group-text">Title</span>
        <input required type="text" class="form-control" placeholder="Title" v-model="news.title" aria-label="Title">
      </div>
      <div class="input-group mb-3">
        <span class="input-group-text">Author</span>
        <input required type="text" class="form-control me-3" placeholder="Author" v-model="news.author" aria-label="Author">

        <span class="input-group-text">Date</span>
        <input required type="date" class="form-control" placeholder="Data" v-model="news.publish_date" aria-label="Date">
      </div>
      <div class="input-group mb-3 gap-4">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" v-model="news.is_active" id="isActive" :checked="news.is_active">
          <label class="form-check-label" for="isActive">
            Active?
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" v-model="news.is_featured" :value="news.is_featured" id="isFeatured" :checked="news.is_featured">
          <label class="form-check-label" for="isFeatured">
            Featured?
          </label>
        </div>
      </div>
      

      <!-- <div class="mb-3">
        <input class="form-control" type="file" accept="image/png, image/jpeg, image/jpg" id="formFile">
        <label for="formFile" class="form-label text-danger">Note: Image must be (png, jpeg, jpg) format only.</label>
      </div> -->

      <div class="border" v-if="editor">
        <div class="d-flex flex-wral mb-2 border-bottom">
            <button type="button" title="Bold" @click="editor.chain().focus().toggleBold().run()" :disabled="!editor.can().chain().focus().toggleBold().run()" :class="{ 'is-active': editor.isActive('bold') }">
                <i class="fa-solid fa-bold"></i>
            </button>
            <button type="button" title="Italic" @click="editor.chain().focus().toggleItalic().run()" :disabled="!editor.can().chain().focus().toggleItalic().run()" :class="{ 'is-active': editor.isActive('italic') }">
                <i class="fa-solid fa-italic"></i>
            </button>
            <button type="button" title="Underline" @click="editor.chain().focus().toggleUnderline().run()" :disabled="!editor.can().chain().focus().toggleUnderline().run()" :class="{ 'is-active': editor.isActive('underline') }">
                <i class="fa-solid fa-underline"></i>
            </button>
            <button type="button" title="Strike Through" @click="editor.chain().focus().toggleStrike().run()" :disabled="!editor.can().chain().focus().toggleStrike().run()" :class="{ 'is-active': editor.isActive('strike') }">
                <i class="fa-solid fa-strikethrough"></i>
            </button>
            <button type="button" title="Quotes" @click="editor.chain().focus().toggleBlockquote().run()" :class="{ 'is-active': editor.isActive('blockquote') }">
                <i class="fa-solid fa-quote-left"></i>
            </button>
            <button type="button" title="Code" @click="editor.chain().focus().toggleCode().run()" :disabled="!editor.can().chain().focus().toggleCode().run()" :class="{ 'is-active': editor.isActive('code') }">
                <i class="fa-solid fa-code"></i>
            </button>
            <button type="button" title="Heading 1" @click="editor.chain().focus().toggleHeading({ level: 1 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }">
                <b>H1</b>
            </button>
            <button type="button" title="Heading 2" @click="editor.chain().focus().toggleHeading({ level: 2 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 2 }) }">
                <b>H2</b>
            </button>
            <button type="button" title="Heading 3" @click="editor.chain().focus().toggleHeading({ level: 3 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 3 }) }">
                <b>H3</b>
            </button>
            <button type="button" title="Unordered List" @click="editor.chain().focus().toggleBulletList().run()" :class="{ 'is-active': editor.isActive('bulletList') }">
                <i class="fa-solid fa-list"></i>
            </button>
            <button type="button" title="Ordered List" @click="editor.chain().focus().toggleOrderedList().run()" :class="{ 'is-active': editor.isActive('orderedList') }">
                <i class="fa-solid fa-list-ol"></i>
            </button>
        </div>
        <editor-content :editor="editor" class="px-2 overflow-auto" style="max-height: 100vh;"/>
    </div>

      <div class="d-grid gap-2 mt-3 d-md-flex justify-content-md-end">
        <button class="btn btn-light me-md-2" type="button" @click="$router.go(-1)">Cancel</button>
        <button class="btn btn-danger" type="submit">Submit</button>
      </div>
    </form>
  </section>
</template>

<script>
import RichText from '@/components/RichText.vue';
import { Editor, EditorContent } from '@tiptap/vue-3'
import Placeholder from '@tiptap/extension-placeholder'
import Underline from '@tiptap/extension-underline'
import BlockQuote from '@tiptap/extension-blockquote'
import StarterKit from '@tiptap/starter-kit';

import axios from 'axios';

export default {
  data() {
    return {
        editor: null,
        news: {
            title: "",
            author: "",
            publish_date: "",
            article: "",
            is_active: false,
            is_featured: false,
        },
    }
  },
  components: {
        RichText,
        EditorContent
  },
  beforeUnmount() {
        this.editor.destroy();
    },

    mounted() {
        this.editor = new Editor({
            content: this.news.article,
            extensions: [
                StarterKit,
                BlockQuote,
                Underline,
                Placeholder.configure({
                    placeholder: 'Write your article here...'
                }),
            ],
        })
    },

    updated() {
        this.news.article = this.editor.view.dom.innerHTML;
    },

    methods: {
        async createNews() {
            let userToken = JSON.parse(localStorage.getItem('currentUser')).token;
            console.log(this.news)
            await axios.post('https://api.integratrgov.com/api/content_srvc/admin/news/', {
                    "news_url": "smaple",
                    "news_filename": "sample",
                    "news_photo_type": "jpg",
                    "news_photo_size": "213",
                    "has_video": 0,
                    "publish_date": this.news.publish_date,
                    "author": this.news.author,
                    "title": this.news.title,
                    "article": this.news.article,
                    "is_active": this.news.is_active ? 1 : 0,
                    "is_featured": this.news.is_featured ? 1 : 0
            }, {
                headers: {
                    Authorization: `Bearer ${userToken}`,
                    'Content-Type': 'application/json',
                },
            }).then((response) => {
                console.log(response.data);
            }).catch((err) => {
                console.log("Error: ", err)
            })
        }
    }
}
</script>

<style>
.ProseMirror p.is-editor-empty:first-child::before {
  content: attr(data-placeholder);
  float: left;
  color: #adb5bd;
  pointer-events: none;
  height: 0;
}
</style>