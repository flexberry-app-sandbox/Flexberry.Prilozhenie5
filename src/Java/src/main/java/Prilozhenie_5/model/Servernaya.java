package Prilozhenie_5.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Prilozhenie_5.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.List;

/**
 * Entity implementation class for Entity: Серверная
 */
@Entity(name = "IISPrilozhenie_5Серверная")
@Table(schema = "public", name = "Серверная")
public class Servernaya {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "IP")
    private String ip;

    @Column(name = "Настройки")
    private String настройки;

    @Column(name = "Протокол")
    private String протокол;

    @Column(name = "Порт")
    private Integer порт;

    @Column(name = "IDСерверной")
    private Integer idсерверной;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Sotrudnik")
    @Convert("Sotrudnik")
    @Column(name = "Сотрудник", length = 16, unique = true, nullable = false)
    private UUID _sotrudnikid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Sotrudnik", insertable = false, updatable = false)
    private Sotrudnik sotrudnik;

    @OneToMany(mappedBy = "servernaya", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<Kontroller> kontrollers;


    public Servernaya() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getIP() {
      return ip;
    }

    public void setIP(String ip) {
      this.ip = ip;
    }

    public String getНастройки() {
      return настройки;
    }

    public void setНастройки(String настройки) {
      this.настройки = настройки;
    }

    public String getПротокол() {
      return протокол;
    }

    public void setПротокол(String протокол) {
      this.протокол = протокол;
    }

    public Integer getПорт() {
      return порт;
    }

    public void setПорт(Integer порт) {
      this.порт = порт;
    }

    public Integer getIDСерверной() {
      return idсерверной;
    }

    public void setIDСерверной(Integer idсерверной) {
      this.idсерверной = idсерверной;
    }


}