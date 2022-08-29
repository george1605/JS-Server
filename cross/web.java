import javafx.application.Application;
import javafx.concurrent.Worker.State;
import javafx.scene.Group;
import javafx.scene.Scene;
import javafx.scene.web.WebEngine;
import javafx.stage.Stage;

public class Main extends Application {
  public static void main(String[] args) {
    Application.launch(args);
    
  }

  @Override
  public void start(Stage primaryStage) {
    WebEngine webEngine = new WebEngine();
    webEngine.getLoadWorker().stateProperty()
        .addListener((obs, oldValue, newValue) -> {
          if (newValue == State.SUCCEEDED) {
            System.out.println("finished loading");
          }
        }); // addListener()

    webEngine.load("http://localhost:3000");
    
    Group root = new Group();
    Scene scene = new Scene(root, 400, 300);

    primaryStage.setScene(scene);
    primaryStage.show();
  }
}
