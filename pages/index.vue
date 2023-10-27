<template>
  <div>
    <div>
      <nav
        class="uk-navbar-container uk-margin-medium-top uk-margin-medium-bottom"
        style="background: none !important"
      >
        <div class="uk-container">
          <div uk-navbar>
            <div class="uk-navbar-left">
              <a
                class="uk-navbar-item uk-logo"
                href="#"
                aria-label="Back to Home"
                >Logo</a
              >
              <!-- <ul class="uk-navbar-nav">
                <li>
                  <a href="#">
                    <span class="uk-icon uk-margin-small-right" uk-icon="icon: star"></span>
                    Features
                  </a>
                </li>
              </ul> -->
            </div>
            <div class="uk-navbar-center">
              <div class="uk-inline">
                <span
                  class="uk-form-icon uk-form-icon-flip"
                  uk-icon="icon: search"
                ></span>
                <input
                  v-model="search"
                  class="uk-input uk-form-width-large uk-border-pill"
                  type="text"
                  placeholder="Search by name"
                  @change="booksFindDelay"
                />
              </div>
            </div>
            <div class="uk-navbar-right">
              <ul class="uk-navbar-nav">
                <!-- <li>
                  <img class="uk-border-circle" width="40" height="40" src="https://i.pravatar.cc/100" alt="Avatar">
                </li> -->
                <li>
                  <a href="#">
                    <span
                      class="uk-icon uk-margin-small-right"
                      uk-icon="icon: heart"
                    ></span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span class="uk-margin-small-right">EN</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
    <!-- <div class="uk-grid uk-grid-collapse" uk-grid>

    </div> -->
    <div>
      <div class="uk-flex-center uk-text-center" uk-grid>
        <div v-for="category in categories" :key="category">
          <button class="uk-button uk-button-default uk-border-pill" @click="filterByCategory({category, name: search})">
            {{ category }}
          </button>
        </div>
      </div>
    </div>

    <div class="uk-container uk-margin-medium-top">
      <div
        class="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light"
        data-src="https://images.unsplash.com/photo-1490822180406-880c226c150b?fit=crop&w=650&h=433&q=80"
        uk-img
        style="border-radius: 15px"
      >
        <h1>Background Image</h1>
      </div>
    </div>

    <div class="uk-container uk-margin-medium-top uk-margin-small-bottom">
      <div class="uk-grid" uk-grid>
        <h3 class="uk-width-1-5 uk-text-bold">Popular Now</h3>
        <div class="uk-width-expand"></div>
        <h3
          class="uk-width-1-5 uk-button uk-button-default uk-border-pill uk-text-right"
        >
          View All
        </h3>
      </div>
    </div>

    <div class="uk-container uk-margin-small-top">
      <div class="uk-grid uk-grid-match" uk-grid>
        <div v-for="book in Books.data" :key="book?.title + book?.author" class="uk-width-1-5">
          <div class="uk-card uk-card-default" style="border-radius: 15px">
            <div class="uk-card-media-top">
              <img
                :src="book.thumbnail"
                style="
                  width: 100%;
                  height: 240px;
                  object-fit: cover;
                  border-radius: 15px;
                "
                :alt="`${book?.title} Thumbnail's`"
              />
            </div>
            <div class="uk-card-body">
              <h3 class="uk-card-title">{{ book?.title }}</h3>
              <p>{{ book?.author }}</p>
              <p>{{ book?.ratings }}/5</p>
            </div>
          </div>
        </div>
      </div>
      <div v-if="Books.isLoading" class="uk-text-center uk-margin-top">
        <span uk-spinner></span>
      </div>
    </div>
  </div>
  <!-- <div class="uk-text-center uk-grid-collapse" uk-grid>
    <div class="uk-width-1-4">

    </div>
    <div class="uk-width-expand">
      <div class="uk-inline">
        <span class="uk-form-icon" uk-icon="icon: user"></span>
        <input class="uk-input" type="text" aria-label="Not clickable icon">
      </div>
    </div>
    <div class="uk-width-1-4">
      <div class="uk-card uk-card-default uk-card-body">Expand</div>
    </div>
  </div> -->
</template>

<script>
import { v4 as uuid } from 'uuid'
import Cookie from 'js-cookie'
import lodash from 'lodash';
import {mapActions, mapState} from 'vuex'
export default {
  name: 'IndexPage',
  data() {
    return {
      userId: Cookie.get('userId') || null,
      categories: [
        'Art',
        'Biography',
        'Computers',
        'History',
        'Medical',
        'Poetry',
      ],
      search: null,
    }
  },
  created() {
    if (this.userId === null) {
      const id = uuid()
      Cookie.set('userId', id, { expires: 30 })
      this.userId = id
    }
  },
  computed: {
    ...mapState('books', {
      Books: 'books',
    })
  },
  async mounted() {
    await this.getBooks()
  },
  methods: {
    ...mapActions('books', {
      getBooks: 'fetch',
      findBooks: 'search',
      filterByCategory: 'searchByCategory'
    }),
    booksFindDelay: lodash.debounce(function () {
      this.findBooks(this?.search)
    }, 100),
  }
}
</script>
