<template>
  <div class="Home">
    <AppBar />
    <v-main>
      <div class="banner" :class="resultType">
        <p>COVID-19 resultado</p>
        <h1 class="title">{{ obj[resultType].title }}</h1>
        <font-awesome-icon :icon="obj[resultType].icon" size="10x" />
        <h3>{{ obj[resultType].result }}</h3>
      </div>
      <div class="rowActions">
        <div>
          <font-awesome-icon :icon="['far', 'calendar']" size="3x" />
        </div>
        <div>
          <h2>
            Validado dia: {{ dateTime[0] }}
            <br />
            de {{ dateTime[1] }} até {{ dateTime[2] }}
          </h2>
        </div>
      </div>
      <div class="rowActions">
        <div>
          <font-awesome-icon :icon="['fas', 'download']" size="3x" />
        </div>
        <div class="buttons">
          <v-btn
            class="btn"
            color="primary"
            depressed
            elevation="2"
            outlined
            raised
            x-large
            >Resultado por Email
            <font-awesome-icon
              style="margin-left: 10px"
              :icon="['far', 'envelope']"
              size="lg"
            />
          </v-btn>
          <v-btn
            class="btn"
            color="primary"
            depressed
            elevation="2"
            outlined
            raised
            x-large
          >
            Baixar resultado(PDF)
          </v-btn>
        </div>
      </div>
      <div class="rowActions">
        <div>
          <font-awesome-icon :icon="['fas', 'info-circle']" size="3x" />
        </div>
        <div>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy.
          </p>
          <p>
            Many desktop publishing packages and web page editors now use Lorem
            Ipsum as their default model text, and a search for 'lorem ipsum'
            will uncover many web sites still in their infancy.
          </p>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English.
          </p>
        </div>
      </div>
      <div class="rowActions">
        <div>
          <font-awesome-icon :icon="['fas', 'head-side-mask']" size="3x" />
        </div>
        <div>
          <h2>Health and safety tips</h2>
          <ul>
            <li>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
            </li>

            <li>
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
            </li>
            <li>
              Many desktop publishing packages and web page editors now use
              Lorem Ipsum as their default model text, and a search for 'lorem
              ipsum' will uncover many web sites still in their infancy.
            </li>
          </ul>
        </div>
      </div>
    </v-main>
  </div>
</template>

<script>
import AppBar from "../components/AppBar";
import * as moment from "moment";

export default {
  name: "Home",
  components: {
    AppBar,
  },
  data: () => ({
    resultType: "safe",
    obj: {
      isolate: {
        title: "Não saia de casa / isolamento",
        icon: "times",
        result:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      },
      safe: {
        title: "Siga a rotina / com cuidado",
        icon: "check",
        result:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      },
    },
  }),
  computed: {
    dateTime() {
      const today = moment();
      const date = today.format("DD/MM/YYYY");
      const from = today.format("HH:mm");
      const to = today.endOf("day").format("HH:mm");
      return [date, from, to];
    },
  },
};
</script>

<style lang="scss">
.isolate {
  background: #dc2727;
}
.safe {
  background: green;
}
.banner {
  height: 50vh;
  display: flex;
  color: white;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  font-style: normal;
  margin-bottom: 0px;
  padding: 0px 1rem;
  color: rgb(255, 255, 255);
  letter-spacing: 0.15rem;
  .title {
    font-weight: bold !important;
    font-size: 2.875rem !important;
  }
}
.rowActions {
  margin: 60px 30px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: start;
  div {
    padding: 0 25px;
  }
  .buttons {
    display: flex;
    flex-direction: column;
    .btn {
      margin: 05px 0;
    }
  }
}
</style>
